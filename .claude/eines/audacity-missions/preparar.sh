#!/usr/bin/env bash
# Prepara els recursos de les missions d'Audacity (projecte còmic).
# Llig les gravacions netes de brut/ (veure GUION.md) i deixa els fitxers
# finals a assets/projectes/comic/audio/audacity/missions/.
#
# Ús: bash .claude/eines/audacity-missions/preparar.sh
#     OUT=/altra/carpeta bash preparar.sh   (per a provar sense tocar assets)
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/../../.." && pwd)"
IN="$HERE/brut"
OUT="${OUT:-$ROOT/assets/projectes/comic/audio/audacity/missions}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$OUT"

FF=(ffmpeg -hide_banner -loglevel error -y)
NORM="aresample=44100,aformat=channel_layouts=mono,loudnorm=I=-18:TP=-1.5"
TRIM="silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse"
MP3=(-c:a libmp3lame -b:a 128k)

# Busca brut/<nom>.<qualsevol extensió>
src() {
    local f
    # Si n'hi ha diversos (p. ex. .mp3 i .wav), ordre alfabètic: guanya .mp3
    f=$(find "$IN" -maxdepth 1 -type f -name "$1.*" | sort | head -n1)
    if [[ -z "$f" ]]; then echo "FALTA $1" >&2; return 1; fi
    printf '%s' "$f"
}

# conv <entrada> <eixida.mp3> [filtres extra abans de normalitzar]
conv() {
    local extra="${3:-}"
    "${FF[@]}" -i "$1" -af "${extra:+$extra,}$NORM" "${MP3[@]}" "$2"
}

# --- Missió 1: conversa (veu A i veu B) + frase de cançó desordenada ---
for pair in "m1_A:m1_conversa_A" "m1_B:m1_conversa_B" "m1_cancion_1:m1_cancion_1" "m1_cancion_2:m1_cancion_2"; do
    if f=$(src "${pair%%:*}"); then conv "$f" "$OUT/${pair##*:}.mp3" "$TRIM"; echo "OK  ${pair##*:}.mp3"; fi
done

# --- Missió 2: 2 s de soroll sol + brunzit i soroll rosa constants ---
if f=$(src m2_informador); then
    "${FF[@]}" -i "$f" \
        -f lavfi -i "anoisesrc=color=pink:amplitude=0.5:sample_rate=44100" \
        -f lavfi -i "sine=frequency=100:sample_rate=44100" \
        -filter_complex "[0:a]$NORM,adelay=2000,apad=pad_dur=1.5[v];[2:a]volume=0.06[h];[1:a]volume=0.12[p];[p][h]amix=inputs=2:normalize=0[n];[v][n]amix=inputs=2:duration=first:normalize=0,asetpts=N/SR/TB" \
        "${MP3[@]}" "$OUT/m2_trucada.mp3"
    echo "OK  m2_trucada.mp3"
fi

# --- Missió 3: sense canvis (els errors ja estan gravats) ---
for n in m3_noticias m3_opcion_1 m3_opcion_2 m3_opcion_3; do
    if f=$(src "$n"); then
        extra=""; [[ $n == m3_opcion_* ]] && extra="$TRIM"
        conv "$f" "$OUT/$n.mp3" "$extra"; echo "OK  $n.mp3"
    fi
done

# --- Missió 4: missatges camuflats ---
if f=$(src m4_reves);   then conv "$f" "$OUT/m4_mensaje_1.mp3" "$TRIM,areverse";                         echo "OK  m4_mensaje_1.mp3"; fi
if f=$(src m4_lento);   then conv "$f" "$OUT/m4_mensaje_2.mp3" "$TRIM,asetrate=44100*0.6,aresample=44100"; echo "OK  m4_mensaje_2.mp3"; fi
if f=$(src m4_ardilla); then conv "$f" "$OUT/m4_mensaje_3.mp3" "$TRIM,asetrate=44100*1.7,aresample=44100"; echo "OK  m4_mensaje_3.mp3"; fi
if f=$(src m4_villano); then conv "$f" "$OUT/m4_villano.mp3" "$TRIM";                                    echo "OK  m4_villano.mp3"; fi

# --- Missió 5 i 6 ---
if f=$(src m5_narrador); then conv "$f" "$OUT/m5_narrador.mp3"; echo "OK  m5_narrador.mp3"; fi
for n in m6_locutor_1 m6_cliente m6_locutor_2; do
    if f=$(src "$n"); then conv "$f" "$OUT/$n.mp3" "$TRIM"; echo "OK  $n.mp3"; fi
done
if f=$(src m6_musica); then
    "${FF[@]}" -i "$f" -af "aresample=44100,loudnorm=I=-16:TP=-1.5" "${MP3[@]}" "$OUT/m6_musica.mp3"
    echo "OK  m6_musica.mp3"
fi
