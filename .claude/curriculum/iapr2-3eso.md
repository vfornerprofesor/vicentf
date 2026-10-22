# Intel·ligència Artificial, Programació i Robòtica II — 3r ESO (curs 26/27)

> Font: programació del departament «Situacions d'aprenentatge per al curs 26/27 — 3r ESO» (PDF facilitat pel professor, 61 pàg., 2026-10-22). Text extret amb pdftotext -layout. CE1-CE4 i criteris: literals del currículum (Decret 107/2022). CE5 (Projecte Còmic) i CE6 (GIMP avançat): competències d'ampliació del departament.

```text
INTEL·LIGÈNCIA ARTIFICIAL,
PROGRAMACIÓ I ROBÒTICA II

   Situacions d'aprenentatge per al curs 26/27
                     3r ESO




                                                 1 de 61
Índex

1. Introducció                                                              3
     a) Justificació de la programació                                      3

     b) Contextualització                                                   4

2. Temporalització                                                          5

3. Metodologia                                                              6

4. Criteris d'avaluació                                                     7

5. Situacions d'aprenentatge                                              10

     5.1. SA1: Projecte Còmic: un còmic per a canviar el món              10
     5.2. SA2: Les meues apps amb App Inventor                            23

     5.3. SA3: Codi i rodes: robòtica amb micro:bit                       32

     5.4. SA4: Laboratori d'imatge: GIMP avançat                          41

     5.5. SA5: Entrenant ments artificials: com pensen les màquines       50

6. Criteris de qualificació                                               58




                                                                      2 de 61
1. Introducció

L'assignatura d'Intel·ligència Artificial, Programació i Robòtica II, en endavant IAPR II, de 3r d'ESO té com a objectiu que l'alumnat passe de consumir tecnologia a crear-la: que comprenga com funcionen
els sistemes intel·ligents, que resolga problemes amb el pensament computacional, que programe aplicacions i robots, i que produïsca continguts digitals propis de manera crítica, creativa i responsable.

Al llarg del curs, l'alumnat treballarà els següents temes:

    Projecte Còmic: producció multimèdia d'un còmic animat i sonoritzat sobre un Objectiu de Desenvolupament Sostenible (guió, vinyetes, àudio amb Audacity i vídeo amb Kdenlive) i vídeo de la
    cançó «Con ellos aprendí».
    Les meues apps amb App Inventor: programació d'aplicacions mòbils dirigida per esdeveniments.
    Codi i rodes: robòtica amb la placa micro:bit i el robot Maqueen (sensors, actuadors, comunicació per ràdio i concurs de robots).
    Laboratori d'imatge: GIMP avançat: 16 pràctiques d'edició, retoc i composició d'imatges digitals.
    Entrenant ments artificials: tècniques d'intel·ligència artificial, ètica i biaixos, entrenament d'un model propi, automatització de tasques amb Power Automate, ús crític de la IA generativa i
    virtualització de la realitat.

Aquests aprenentatges es concreten en les quatre competències específiques del currículum d'IAPR II: la primera tracta la intel·ligència artificial i la virtualització de la realitat amb criteris ètics i inclusius;
la segona, el pensament computacional aplicat al desenvolupament de programari; la tercera, el muntatge i la programació de sistemes robòtics; i la quarta, la resolució de reptes tecnològics integrant
les anteriors i valorant-ne les implicacions ètiques i ecosocials. Els sabers bàsics s'organitzen en tres blocs: intel·ligència artificial, programació i robòtica.

A més, el departament incorpora dues competències específiques d'ampliació, una per a cadascuna de les situacions d'aprenentatge de creació digital que no tenen cabuda en el currículum oficial
de la matèria: CE5 per al Projecte Còmic (producció multimèdia: guió, vinyetes, àudio i vídeo) i CE6 per al Laboratori d'imatge: GIMP avançat (edició i composició d'imatge digital). Es diferencien sempre
de les curriculars, la redacció de les quals es manté literal.

En l'assignatura d'IAPR II, l'alumnat també desenvoluparà les següents habilitats:

    Habilitats de resolució de problemes: analitzar un problema, dissenyar un algorisme, provar-lo i depurar-lo.
    Habilitats de treball col·laboratiu: programació en parella i treball en equips amb rols en els reptes de robòtica.
    Habilitats de comunicació digital: comunicar idees mitjançant narratives visuals, àudio, vídeo, imatges i aplicacions.


a) Justificació de la programació
Aquest document té com a finalitat el desenvolupament de la programació didàctica per a l'assignatura optativa d'Intel·ligència Artificial, Programació i Robòtica II de 3r d'ESO tenint en compte la següent
normativa:

    LLEI ORGÀNICA 2/2006, del 3 de maig d'Educació.
    LLEI ORGÀNICA 3/2020, del 29 de desembre, per la qual es modifica la llei orgànica anterior.
    REIAL DECRET 217/2022, del 29 de març, pel qual s'estableix l'ordenació i els ensenyaments mínims de l'ESO.
    CORRECCIÓ d'errors del Reial decret 217/2022, de 29 de març, pel qual s'estableix l'ordenació i els ensenyaments mínims de l'Educació Secundària Obligatòria.
    Decret 107/2022, del 5 d'agost del Consell, pel qual s'estableix l'ordenació del currículum d'ESO.
    CORRECCIÓ d'errors del Decret 107/2022, de 5 d'agost, del Consell, pel qual s'estableix l'ordenació i el currículum d'Educació Secundària Obligatòria [DOGV Núm. 9462/03.11.2022].
    Resolució del 15 de juliol de 2026, del Secretari Autonòmic d'Educació i Formació Professional, per la qual s'aproven les instruccions per a l'organització i el funcionament dels centres que
    imparteixen ESO i Batxillerat en el curs 2026-27 (instruccions d'inici de curs).




                                                                                                                                                                                                            3 de 61
b) Contextualització
Betxí és un municipi de la comarca de la Plana Baixa, província de Castelló, que té una població d'al voltant de 6.000 habitants. Les principals activitats econòmiques de la zona són l'agricultura, la
indústria ceràmica i la fabricació de cartons i envasos. Aquestes activitats, que tenen un alt desenvolupament tecnològic, demanden professionals qualificats que siguen capaços d'implantar, mantindre i
desenvolupar tecnologies relacionades amb la informàtica.

Actualment, l'oferta formativa de l'IES de Betxí és la següent:

    Educació Secundària Obligatòria. A més, compta amb el Programa de Diversificació Curricular en 3r i 4t d'ESO.
    Batxillerat:
        Batxillerat de Ciències.
        Batxillerat d'Humanitats i Ciències Socials.

    Cicles Formatius de Grau Mitjà:
         Sistemes Microinformàtics i Xarxes, de la família professional Informàtica i Comunicacions.
         Impressió Gràfica, de la família d'Arts Gràfiques.

L'Institut rep, majoritàriament, alumnat de la pròpia localitat de Betxí i de localitats veïnes com Aín, Artana o Eslida.

Les assignatures de Taller de Relacions Digitals Responsables en 1r d'ESO, Intel·ligència Artificial, Programació i Robòtica en 2n i 3r d'ESO, Digitalització en 4t d'ESO i Informàtica I i Informàtica II en 1r i 2n
de Batxillerat són optatives d'oferta obligatòria. L'alumne pot escollir aquestes assignatures tots els cursos o en cursos individuals no necessàriament consecutius. Com a conseqüència, en una mateixa
classe conviuen alumnes amb nivells diferents de competència digital. Aquesta diversitat fa que els alumnes amb competència digital menor siguen ajudats més freqüentment pels professors i els
companys perquè aconseguisquen els objectius de cada curs.




                                                                                                                                                                                                           4 de 61
2. Temporalització

L'assignatura té una càrrega lectiva de 2 hores setmanals (dimarts i divendres), amb sessions de 55 minuts. D'acord amb el calendari escolar de l'IES de Betxí per al curs 2026-27 (inici el 9 de setembre,
final el 18 de juny i dies festius i de vacances del centre), hi ha 69 sessions lectives: 26 en la 1a avaluació (de l'11/09 al 22/12), 20 en la 2a (del 08/01 al 16/03) i 23 en la 3a (del 23/03 al 18/06). Les
sessions es compten fins a la sessió d'avaluació de cada trimestre. Les situacions d'aprenentatge es distribueixen de la manera següent:

 SA         Títol                                                                       Sessions     Avaluació

 SA1        Projecte Còmic: un còmic per a canviar el món                                      22    1a avaluació

 SA2        Les meues apps amb App Inventor (14 sessions)                                        4   1a avaluació (sessions 1-4: interfície i Endevinar número)

                                                                                               10    2a avaluació (sessions 5-14: Marcador handbol, Pedra, paper i tisora, Atrapa el talp i lliurament)

 SA3        Codi i rodes: robòtica amb micro:bit (16 sessions)                                 10    2a avaluació (sessions 1-10: micro:bit, sensors, ràdio, robot Maqueen i inici del control remot)

                                                                                                 6   3a avaluació (sessions 11-16: control remot, seguidor de línies i concurs de robots)

 SA4        Laboratori d'imatge: GIMP avançat                                                    8   3a avaluació

 SA5        Entrenant ments artificials: com pensen les màquines                                 9   3a avaluació

 Total                                                                                         69


Repartiment per avaluacions:


 Avaluació                      Situacions d'aprenentatge                                                                                                                                          Sessions

 1a avaluació                   SA1, SA2 (sessions 1-4)                                                                                                                                                     26

 2a avaluació                   SA2 (sessions 5-14), SA3 (sessions 1-10)                                                                                                                                    20

 3a avaluació                   SA3 (sessions 11-16), SA4, SA5                                                                                                                                              23



  Respecte del curs 2025-26, el Projecte Còmic passa a ocupar tot el primer trimestre (22 sessions) i incorpora l'aprenentatge d'Audacity i de Kdenlive amb activitats i el vídeo de la cançó «Con ellos
  aprendí». La IA incorpora l'automatització de tasques amb Power Automate i la robòtica guanya una sessió per al seguidor de línies. Es tracta d'una estimació que es revisarà al final del curs.




                                                                                                                                                                                                        5 de 61
3. Metodologia

La metodologia de l'assignatura és activa i pràctica, i es concreta en els aspectes següents:

    Aprenentatge basat en reptes i projectes. Cada situació d'aprenentatge parteix d'un repte que dona sentit a les tasques: contar una història que ajude a canviar el món, programar apps que
    funcionen al mòbil, fer que un robot prenga decisions i guanyar el concurs de robots, convertir-se en editor/a d'imatge o decidir si es pot confiar en una IA.
    Progressió de guiat a autònom. Les destreses noves s'introdueixen amb una demostració projectada o un vídeo que l'alumnat reprodueix pas a pas; després hi ha pràctica guiada amb activitats
    (per exemple, les activitats d'Audacity i de Kdenlive abans d'aplicar-les al còmic) i, finalment, una tasca en autonomia a partir d'un enunciat o un esquelet de requisits («pregunta a dos companys
    abans que al professor»).
    Pensament computacional explícit. Abans de programar o d'automatitzar, l'alumnat analitza el problema, el descompon i el representa amb llenguatge natural o diagrames de flux; després prova
    i depura de manera sistemàtica amb fitxes de proves.
    Agrupaments variats. Treball individual en les destreses tècniques, programació en parella amb rols rotatius (pilot i copilot) i grups cooperatius amb rols definits (cap de projecte, muntador/a,
    programador/a, documentalista) en els reptes de robòtica (tot el bloc es treballa per parelles i, en algunes tasques, en equips de dues parelles).
    Disseny Universal per a l'Aprenentatge (DUA). Cada activitat té tres nivells (bàsic, estàndard i ampliació); les instruccions es donen en diversos formats (demostració, vídeo, targetes amb
    captures, web de la matèria) i l'alumnat pot expressar el que sap per escrit, oralment, en àudio, amb vídeo o amb productes visuals.
    Avaluació formativa. Rúbriques i llistes de control conegudes per l'alumnat des de l'inici, retroalimentació contínua, autoavaluació i coavaluació en el tancament de cada SA, i documentació del
    procés (guió multimèdia, diari d'equip, fitxes de proves). Cada SA reserva temps per a completar o millorar les tasques pendents.
    Entorn digital de treball. L'alumnat treballa amb el compte educatiu (correu, núvol i Microsoft 365 del centre), Aules per al lliurament de tasques, la web de la matèria amb les unitats i programari
    lliure o en línia: Storyboard That, Audacity, Kdenlive, MIT App Inventor, MakeCode per a micro:bit (amb simulador) i el robot Maqueen, GIMP, Scratch, eines d'aprenentatge automàtic com Machine
    Learning for Kids o Teachable Machine i Power Automate.
    Ús ètic i responsable des de la pràctica. Els criteris de verificació de la IA, l'ús de recursos lliures de drets, la citació de l'autoria, la cura de la imatge de les persones i la sostenibilitat en el
    disseny s'apliquen en les mateixes tasques de l'aula, no només en el discurs.




                                                                                                                                                                                                     6 de 61
4. Criteris d'avaluació

Es relacionen les competències específiques treballades al llarg del curs, els criteris d'avaluació de cadascuna i les situacions d'aprenentatge on s'avaluen.


Competències específiques del currículum

CE1
Identificar, investigar i emprar tècniques d'intel·ligència artificial i virtualització de la realitat en l'abordatge i la cerca de solucions a problemes bàsics de la societat valorant els principis ètics i inclusius
aplicats.

 Codi         Criteri d'avaluació                                                                                                                                                                    SA

 CE1.1        Identificar el funcionament de tècniques de IA.                                                                                                                                        SA5

 CE1.2        Investigar situacions on s'apliquen tècniques de IA.                                                                                                                                   SA5

 CE1.3        Valorar criteris ètics aplicats a les funcions de IA.                                                                                                                                  SA5

 CE1.4        Emprar funcions de IA en aplicacions senzilles seguint criteris ètics i inclusius per a buscar solucions a problemes bàsics.                                                           SA5

 CE1.5        Emprar tècniques senzilles de virtualització de la realitat.                                                                                                                           SA5



CE2
Aplicar el pensament computacional en l'anàlisi i resolució de problemes bàsics significatius per a l'alumnat mitjançant el desenvolupament de programari.

 Codi         Criteri d'avaluació                                                                                                                                                                    SA

 CE2.1        Analitzar problemes bàsics significatius per a l'alumnat, mitjançant l'ús de les estructures de control més adequades.                                                                 SA2

 CE2.2        Avaluar i mantindre les aplicacions informàtiques desenvolupades pel mateix alumnat.                                                                                                   SA2

 CE2.3        Planificar de manera autònoma la solució de problemes bàsics, utilitzant els algorismes i les estructures de dades més adequades.                                                      SA2

 CE2.4        Programar aplicacions senzilles multiplataforma de manera autònoma per a resoldre problemes bàsics.                                                                                    SA2

 CE2.5        Aplicar i respectar els drets d'autoria, llicències de drets i explotació durant la creació de programari.                                                                             SA2



CE3
Muntar sistemes robòtics senzills, analitzant les respostes que proporcionen en la seua interacció amb l'entorn i valorant l'eficàcia d'aquestes davant dels reptes plantejats.


                                                                                                                                                                                                                 7 de 61
 Codi         Criteri d'avaluació                                                                                                                                                                  SA

 CE3.1        Muntar robots de major complexitat emprant sensors, actuadors i altres operadors.                                                                                                     SA3

 CE3.2        Connectar, transferir i validar l'execució del programa de control seleccionat al robot.                                                                                              SA3

 CE3.3        Seleccionar els mòduls d'entrada i eixida per a muntar robots senzills, que siguen capaços de fer tasques de manera autònoma.                                                         SA3

 CE3.4        Analitzar i avaluar l'eficàcia de la interacció del robot amb l'entorn.                                                                                                               SA3

 CE3.5        Programar instruccions senzilles multiplataforma de manera autònoma per a controlar un robot programable.                                                                             SA3

 CE3.6        Controlar el robot per part de l'usuari en temps real i de manera remota.                                                                                                             SA3



CE4
Afrontar reptes tecnològics senzills i proposar solucions mitjançant la programació, la intel·ligència artificial i la robòtica, analitzant les possibilitats i valorant críticament les implicacions ètiques i
ecosocials.

 Codi         Criteri d'avaluació                                                                                                                                                                  SA

 CE4.1        Planificar tasques senzilles, crear estructures d'equips de treball, distribuir funcions i responsabilitats de les persones integrants i col·laborar proactivament en el              SA3
              desenvolupament de solucions digitals i tecnològiques.

 CE4.2        Valorar la importància de la intel·ligència artificial, la programació i la robòtica com a elements disruptors de la transformació social, cultural i científica actuals.             SA5

 CE4.3        Dissenyar solucions utilitzant la programació, la intel·ligència artificial i la robòtica triant l'opció que millor s'adapte als reptes plantejats.                                   SA2, SA3, SA5

 CE4.4        Gestionar situacions d'incertesa en entorns digitals i tecnològics amb una actitud positiva, i afrontar-les utilitzant el coneixement adquirit i sentint-se competent.                SA2, SA3

 CE4.5        Aplicar la sostenibilitat i inclusió com a requisits del disseny de solucions tecnològiques.                                                                                          SA3



Competències específiques d'ampliació del departament
Les competències d'ampliació són pròpies del departament i s'afegeixen a les del currículum per a avaluar les dues situacions d'aprenentatge de creació digital, amb una competència exclusiva per a
cadascuna: CE5 per al Projecte Còmic i CE6 per al Laboratori d'imatge: GIMP avançat. La redacció de CE1-CE4 i dels seus criteris es manté literal respecte del currículum; CE5 i CE6 es diferencien sempre
com a ampliació.


CE5 — Projecte Còmic
Planificar i produir una narració multimèdia (còmic animat i sonoritzat), des del guió fins al muntatge audiovisual, combinant imatge, text, àudio i vídeo per a comunicar un missatge de manera creativa,
respectant els drets d'autoria i valorant el resultat.

 Codi         Criteri d'avaluació                                                                                                                                                                  SA


                                                                                                                                                                                                                  8 de 61
 CE5.1        Planificar la producció mitjançant un guió multimèdia que descriga, per a cada vinyeta, l'escena, els personatges, el text i el so, coherent amb el missatge i l'ODS       SA1
              triat.

 CE5.2        Crear les vinyetes aplicant els elements del llenguatge del còmic (escenes, plans, personatges, bafarades i cartutxos) amb una seqüència narrativa comprensible.           SA1

 CE5.3        Gravar i editar àudio digital (nivells, reducció de soroll, normalització, pistes, esvaïments i efectes) i exportar-lo en el format adequat.                               SA1

 CE5.4        Muntar vídeo amb un editor no lineal sincronitzant imatge i so, amb introducció, transicions i crèdits, i exportar-lo amb els paràmetres adequats.                         SA1

 CE5.5        Organitzar els recursos del projecte (carpetes, noms d'arxiu, formats de treball i d'exportació) i utilitzar recursos lliures de drets citant-ne l'autoria.                SA1

 CE5.6        Presentar el producte final, valorar-ne el resultat i proposar millores a partir de l'autoavaluació i la coavaluació.                                                      SA1



CE6 — GIMP avançat
Editar i compondre imatges digitals amb un programa d'edició de mapes de bits, aplicant tècniques de capes, selecció, rutes, ajustos, retoc i fotomuntatge, i conservant i exportant el treball en el format
adequat.

 Codi        Criteri d'avaluació                                                                                                                                                         SA

 CE6.1        Guardar els projectes en XCF, exportar les imatges en PNG o JPG segons la finalitat i organitzar els arxius originals i els treballs realitzats.                           SA4

 CE6.2        Compondre imatges amb capes, alineant i distribuint els elements amb precisió.                                                                                             SA4

 CE6.3        Seleccionar i aïllar elements amb els modes de selecció, les rutes i la selecció per color, i llevar el fons d'una imatge.                                                 SA4

 CE6.4        Ajustar el color i la llum d'una imatge amb degradats, il·luminació, enfocament i desenfocament i filtres.                                                                 SA4

 CE6.5        Fer fotomuntatges i retocs fotogràfics (color d'ulls, dents, arrugues i textura de la pell) amb un resultat natural.                                                       SA4




                                                                                                                                                                                                    9 de 61
5. Situacions d'aprenentatge

5.1. SA1: Projecte Còmic: un còmic per a canviar el món

                                                                      SA1: Projecte Còmic: un còmic per a canviar el món

ÀREA /               IAPR II                           NIVELL                3r ESO                             TEMPORALITZACIÓ           22 sessions (1a avaluació)
MATÈRIA /
ÀMBIT

CONTEXT              ☑ Personal        ☑ Educatiu       ☑ Social      ☐ Professional

DESCRIPCIÓ           Primera SA del curs, que ocupa tot el primer trimestre. L'alumnat crea un còmic animat i sonoritzat sobre un dels Objectius de Desenvolupament Sostenible. Primer planifica (tria de
                     l'ODS, història i guió multimèdia de com a mínim 15 vinyetes) i fa les vinyetes amb Storyboard That; després aprén Audacity amb activitats, grava i munta l'àudio de cada vinyeta;
                     finalment aprén Kdenlive, munta el vídeo del còmic sincronitzant vinyetes i àudio, i munta un segon vídeo amb la cançó «Con ellos aprendí».

REPTE O              «Conta una història que ajude a canviar el món.» Fes un còmic animat i sonoritzat que faça pensar sobre un ODS.
PREGUNTA

PROBLEMA             L'alumnat consumeix contingut audiovisual a diari però rarament planifica una producció pròpia: comença a crear sense guió, no organitza els arxius, fa servir música i imatges
                     sense pensar en els drets i no sap valorar ni millorar el resultat.

PRODUCTE             Intermedis: document «Guió multimèdia», carpeta vinyetes.zip, activitats d'Audacity i de Kdenlive, i àudios Vinyeta1.mp3, Vinyeta2.mp3…
INTERMEDI I/O        Finals: vídeo comic_Nom_Cognom.mp4 amb introducció, totes les vinyetes sincronitzades amb el so i crèdits amb l'ODS treballat, i vídeo de la cançó «Con ellos aprendí».
FINAL

RELACIÓ AMB          Repte del s. XXI: compromís davant les situacions d'inequitat i exclusió i consciència ecosocial, a partir de la creació de continguts propis.
ELS REPTES           ODS triat per l'alumnat (1-17) i ODS 4: Educació de qualitat: el còmic explica el problema, el desenvolupament i una solució a un repte global.
DEL S. XXI I
ELS ODS

CCL: Competència en comunicació lingüística CP: Competència plurilingüe STEM: Competència matemàtica i competència en ciència, tecnologia i enginyeria CD: Competència digital
CPSAA: Competència personal, social i d'aprendre a aprendre CC: Competència ciutadana CCEC: Competència en consciència i expressió cultural CE: Competència emprenedora




                                                                                                                                                                                                 10 de 61
                                                                      SA1: Projecte Còmic: un còmic per a canviar el món

COMPETÈNCIES          CCL,             COMPETÈNCIES          Competència específica d'ampliació del departament (Projecte Còmic): CE5. Planificar                                CRITERIS      CE5: CE5.1, CE5.2, CE5.3,
CLAU                  CD,              ESPECÍFIQUES          i produir una narració multimèdia (còmic animat i sonoritzat), des del guió fins al muntatge                        D'AVALUACIÓ   CE5.4, CE5.5, CE5.6
                      CPSAA,                                 audiovisual, combinant imatge, text, àudio i vídeo per a comunicar un missatge de manera
                      CC,                                    creativa, respectant els drets d'autoria i valorant el resultat.
                      CE,
                      CCEC

SABERS                     Producció multimèdia: fases, guió multimèdia i storyboard.
BÀSICS I                   Llenguatge del còmic: vinyetes, plans, personatges, diàlegs, bafarades i cartutxos.
ALTRES                     Captura de pantalla i organització de recursos: carpetes, noms, formats i compressió (ZIP).
SABERS                     Àudio digital: interfície d'Audacity, gravació, nivells, reducció de soroll, normalització, pistes, esvaïments, efectes i exportació a MP3.
                           Vídeo digital: interfície de Kdenlive, pistes, línia de temps, retall, sincronització, transicions, títols i exportació (MP4, resolució i fotogrames per segon).
                           Recursos lliures de drets i llicències (Pixabay, Freesound). Citació de l'autoria. Ús educatiu d'obres amb drets.
                           Objectius de Desenvolupament Sostenible.

CCL: Competència en comunicació lingüística CP: Competència plurilingüe STEM: Competència matemàtica i competència en ciència, tecnologia i enginyeria CD: Competència digital
CPSAA: Competència personal, social i d'aprendre a aprendre CC: Competència ciutadana CCEC: Competència en consciència i expressió cultural CE: Competència emprenedora




                                                                                                                                                                                                                  11 de 61
                                                                                            SA1: criteris d'avaluació


Criteris d'avaluació que es treballen en aquesta situació d'aprenentatge, tasques on es recullen les evidències i pes de cada criteri dins de la seua competència específica. La situació d'aprenentatge és el
context on s'avaluen els criteris: la nota de cada criteri passa a la seua CE i les CE donen la nota de l'avaluació i la final (apartat 6). Per això la SA no té una nota pròpia i aquests pesos no han de sumar
100 % dins de la SA.

 Criteri      Descripció                                                                                                                               Tasques                                  Pes en la CE

 CE5.1        Planificar la producció mitjançant un guió multimèdia que descriga, per a cada vinyeta, l'escena, els personatges, el text i el so,      T1, T2                                    15 % de CE5
              coherent amb el missatge i l'ODS triat.

 CE5.2        Crear les vinyetes aplicant els elements del llenguatge del còmic (escenes, plans, personatges, bafarades i cartutxos) amb una           T2, T3                                    20 % de CE5
              seqüència narrativa comprensible.

 CE5.3        Gravar i editar àudio digital (nivells, reducció de soroll, normalització, pistes, esvaïments i efectes) i exportar-lo en el format      T4, T5, T6                                20 % de CE5
              adequat.

 CE5.4        Muntar vídeo amb un editor no lineal sincronitzant imatge i so, amb introducció, transicions i crèdits, i exportar-lo amb els            T7, T8, T9                                25 % de CE5
              paràmetres adequats.

 CE5.5        Organitzar els recursos del projecte (carpetes, noms d'arxiu, formats de treball i d'exportació) i utilitzar recursos lliures de drets   T3, T5, T6, T8, T9                        10 % de CE5
              citant-ne l'autoria.

 CE5.6        Presentar el producte final, valorar-ne el resultat i proposar millores a partir de l'autoavaluació i la coavaluació.                    T10                                       10 % de CE5




                                                                                                                                                                                                     12 de 61
                                                                          Tasca 1: Triem l'ODS i la història

OBJECTIUS DE LA         Conéixer els 17 ODS i triar-ne un justificant l'elecció.                                                                        APRENENTATGE ACCESSIBLE
TASCA                   Escriure el resum d'una història amb plantejament d'un problema, desenvolupament i conclusió, amb personatges i                   Accessibilitat
                        ambients.                                                                                                                             Física
                                                                                                                                                              Sensorial
TEMPORALITZACIÓ      2 sessions                                                                                                                               Cognitiva
                        Sessió 1: presentació de l'assignatura i del projecte, qüestionari inicial; exploració dels ODS a la web de Nacions Unides;           Emocional
                        creació del document «Guió multimèdia» a la carpeta del curs.                                                                     Considera la perspectiva cultural, de gènere i
                        Sessió 2: redacció dels punts 1 (ODS i justificació) i 2 (resum de la història) i revisió amb el professor.                       socioeconòmica.
                                                                                                                                                          Considera la connexió amb els desafiaments,
MESURES DE           METODOLOGIA /       Presentació en gran grup i treball individual amb revisió entre iguals del resum.                                ODS i afavoreix el rol actiu de l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                           Aconsegueix la màxima implicació i
                                                                                                                                                          participació de tot l'alumnat.
                     RECURSOS            Web dels ODS; Document de Google a la carpeta Informàtica - 3 ESO; plantilla del guió; web de la                 Du a terme un seguiment continu
                     MATERIALS,                                                                                                                           proporcionant feedback.
                                         matèria.
                     PERSONALS I                                                                                                                          Presenta la informació a l'alumnat utilitzant
                     ESPACIALS                                                                                                                            diferents formats.
                                                                                                                                                          Afavoreix la reflexió i el processament de la
MESURES DE           Llista reduïda d'ODS amb exemples; preguntes guia per a escriure la història; possibilitat d'explicar la història oralment abans     informació a diferents nivells.
                                                                                                                                                          Ofereix a l'alumnat diferents maneres
RESPOSTA (III, IV)   d'escriure-la; temps addicional.
                                                                                                                                                          d'expressió del coneixement.

CODI CRITERIS        CE5.1
D'AVALUACIÓ




                                                                                                                                                                                                 13 de 61
                                                                              Tasca 2: El guió multimèdia

OBJECTIUS DE LA         Dividir la història en com a mínim 15 vinyetes mantenint una seqüència comprensible.                                           APRENENTATGE ACCESSIBLE
TASCA                   Descriure per a cada vinyeta l'escena, els personatges, el text i el so.                                                         Accessibilitat
                                                                                                                                                             Física
TEMPORALITZACIÓ      2 sessions                                                                                                                              Sensorial
                        Sessió 3: què és un guió multimèdia i exemples; creació de la taula per vinyeta (imatge, text, so, accions).                         Cognitiva
                        Sessió 4: acabament del guió i revisió per parelles amb una llista de control (seqüència, coherència amb l'ODS, respecte).           Emocional
                                                                                                                                                         Considera la perspectiva cultural, de gènere i
MESURES DE           METODOLOGIA /        Explicació amb exemples, treball individual i coavaluació per parelles.                                        socioeconòmica.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                          Considera la connexió amb els desafiaments,
                                                                                                                                                         ODS i afavoreix el rol actiu de l'alumnat.
                     RECURSOS             Document «Guió multimèdia»; llista de control del guió; exemples de guions.                                    Aconsegueix la màxima implicació i
                     MATERIALS,                                                                                                                          participació de tot l'alumnat.
                     PERSONALS I                                                                                                                         Du a terme un seguiment continu
                     ESPACIALS                                                                                                                           proporcionant feedback.
                                                                                                                                                         Presenta la informació a l'alumnat utilitzant
MESURES DE           Plantilla amb la taula ja creada; mínim de vinyetes reduït (10); suport del professor en la divisió en escenes; per a l'alumnat     diferents formats.
RESPOSTA (III, IV)   d'altes capacitats, guió de més de 20 vinyetes amb canvis de pla.                                                                   Afavoreix la reflexió i el processament de la
                                                                                                                                                         informació a diferents nivells.
CODI CRITERIS        CE5.1, CE5.2                                                                                                                        Ofereix a l'alumnat diferents maneres
D'AVALUACIÓ                                                                                                                                              d'expressió del coneixement.




                                                                                                                                                                                                14 de 61
                                                                               Tasca 3: Fem les vinyetes

OBJECTIUS DE LA         Crear totes les vinyetes amb Storyboard That d'acord amb el guió, fent servir escenes, personatges, bafarades i textos.       APRENENTATGE ACCESSIBLE
TASCA                   Capturar cada vinyeta, anomenar-la (Vinyeta1, Vinyeta2…), organitzar-la en carpetes i lliurar-ne el ZIP.                        Accessibilitat
                                                                                                                                                            Física
TEMPORALITZACIÓ      4 sessions                                                                                                                             Sensorial
                        Sessió 5: demostració de Storyboard That (menú d'escenes, personatges, textos, formes) i de la captura de regions;                  Cognitiva
                        primeres tres vinyetes.                                                                                                             Emocional
                        Sessions 6-7: creació de la resta de vinyetes de tres en tres, captura, canvi de nom i pujada a la carpeta Vinyetes del         Considera la perspectiva cultural, de gènere i
                        núvol.                                                                                                                          socioeconòmica.
                                                                                                                                                        Considera la connexió amb els desafiaments,
                        Sessió 8: revisió (que representen el guió, que no hi haja cap falta de respecte), compressió de la carpeta i lliurament de
                                                                                                                                                        ODS i afavoreix el rol actiu de l'alumnat.
                        vinyetes.zip a Aules.
                                                                                                                                                        Aconsegueix la màxima implicació i
                                                                                                                                                        participació de tot l'alumnat.
MESURES DE           METODOLOGIA /       Demostració projectada i treball individual autònom («pregunta a dos companys abans que al professor»).
                                                                                                                                                        Du a terme un seguiment continu
RESPOSTA (I, II)     AGRUPAMENT
                                                                                                                                                        proporcionant feedback.
                                                                                                                                                        Presenta la informació a l'alumnat utilitzant
                     RECURSOS            Storyboard That; ferramenta de captura (Shutter o captura de regió); carpeta al núvol; rúbrica de
                                                                                                                                                        diferents formats.
                     MATERIALS,          vinyetes.
                                                                                                                                                        Afavoreix la reflexió i el processament de la
                     PERSONALS I
                                                                                                                                                        informació a diferents nivells.
                     ESPACIALS
                                                                                                                                                        Ofereix a l'alumnat diferents maneres
                                                                                                                                                        d'expressió del coneixement.
MESURES DE           Targeta de passos amb captures; reducció del nombre de vinyetes; company tutor; ampliació de pantalla si cal; per a l'alumnat
RESPOSTA (III, IV)   d'altes capacitats, ús de plans diferents i cartutxos narratius.

CODI CRITERIS        CE5.2, CE5.5
D'AVALUACIÓ




                                                                                                                                                                                               15 de 61
                                                                                Tasca 4: Aprenem Audacity

OBJECTIUS DE LA         Conéixer la interfície d'Audacity (transport, eines, dispositius, mesuradors, pistes i línia de temps).                          APRENENTATGE ACCESSIBLE
TASCA                   Practicar amb activitats guiades la gravació, l'edició i els efectes bàsics abans d'aplicar-los al còmic.                          Accessibilitat
                                                                                                                                                               Física
TEMPORALITZACIÓ      3 sessions                                                                                                                                Sensorial
                        Sessió 9: interfície, prova de gravació amb el nivell adequat (entre -12 dB i -6 dB), importació d'àudio des del mòbil;                Cognitiva
                        activitat 1 (seleccionar, tallar, copiar, desfer).                                                                                     Emocional
                        Sessió 10: activitat 2: reducció de soroll (perfil de soroll), tallar silencis, normalitzar (-1 dB) i amplificar.                  Considera la perspectiva cultural, de gènere i
                        Sessió 11: activitat 3: diverses pistes, so de fons a -18/-20 dB, esvaïments (fade in i fade out), efectes i exportació a MP3;     socioeconòmica.
                                                                                                                                                           Considera la connexió amb els desafiaments,
                        projecte .aup3.
                                                                                                                                                           ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                           Aconsegueix la màxima implicació i
MESURES DE           METODOLOGIA /        Demostració i pràctica guiada individual. Gravació en un espai silenciós per torns.
                                                                                                                                                           participació de tot l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT
                                                                                                                                                           Du a terme un seguiment continu
                                                                                                                                                           proporcionant feedback.
                     RECURSOS             Audacity (LliureX); auriculars amb micròfon o mòbil; arxius d'àudio de pràctica; web de la matèria (pàgina
                                                                                                                                                           Presenta la informació a l'alumnat utilitzant
                     MATERIALS,           Audacity); fitxes d'activitats.
                                                                                                                                                           diferents formats.
                     PERSONALS I
                                                                                                                                                           Afavoreix la reflexió i el processament de la
                     ESPACIALS
                                                                                                                                                           informació a diferents nivells.
                                                                                                                                                           Ofereix a l'alumnat diferents maneres
MESURES DE           Guia visual de la interfície; gravació assistida; alternativa de veu sintètica per a alumnat amb dificultats d'expressió oral;
                                                                                                                                                           d'expressió del coneixement.
RESPOSTA (III, IV)   activitats amb menys passos; temps addicional.

CODI CRITERIS        CE5.3
D'AVALUACIÓ




                                                                                                                                                                                                  16 de 61
                                                                   Tasca 5: Gravem els àudios de les vinyetes

OBJECTIUS DE LA         Gravar la veu de cada vinyeta seguint el guió, amb una entonació i un ritme adequats.                                              APRENENTATGE ACCESSIBLE
TASCA                   Netejar cada gravació (soroll, silencis, normalització) i guardar-la ordenadament.                                                   Accessibilitat
                                                                                                                                                                 Física
TEMPORALITZACIÓ      2 sessions                                                                                                                                  Sensorial
                        Sessió 12: assaig dels diàlegs i gravació de les veus de la primera meitat de les vinyetes.                                              Cognitiva
                        Sessió 13: gravació de la resta de vinyetes, reducció de soroll, tall de silencis i normalització; organització dels projectes a         Emocional
                        la carpeta audios.                                                                                                                   Considera la perspectiva cultural, de gènere i
                                                                                                                                                             socioeconòmica.
MESURES DE           METODOLOGIA /        Treball individual (o en parella si el grup comparteix veus), amb una vinyeta cada vegada. Revisió entre           Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT           iguals de l'audició.                                                                                               ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                             Aconsegueix la màxima implicació i
                                                                                                                                                             participació de tot l'alumnat.
                     RECURSOS             Audacity; auriculars amb micròfon o mòbil; guió multimèdia; espai de gravació.
                                                                                                                                                             Du a terme un seguiment continu
                     MATERIALS,
                                                                                                                                                             proporcionant feedback.
                     PERSONALS I
                                                                                                                                                             Presenta la informació a l'alumnat utilitzant
                     ESPACIALS
                                                                                                                                                             diferents formats.
                                                                                                                                                             Afavoreix la reflexió i el processament de la
MESURES DE           Gravació per torns amb acompanyament; menys vinyetes amb veu (la resta, amb text); veu sintètica com a alternativa; temps
                                                                                                                                                             informació a diferents nivells.
RESPOSTA (III, IV)   ampliat.
                                                                                                                                                             Ofereix a l'alumnat diferents maneres
                                                                                                                                                             d'expressió del coneixement.
CODI CRITERIS        CE5.3, CE5.5
D'AVALUACIÓ




                                                                                                                                                                                                    17 de 61
                                                                  Tasca 6: Muntatge de l'àudio de les vinyetes

OBJECTIUS DE LA         Afegir a cada vinyeta so de fons i efectes lliures de drets amb esvaïments i volum adequat.                                     APRENENTATGE ACCESSIBLE
TASCA                   Exportar cada àudio a MP3 (Vinyeta1.mp3, Vinyeta2.mp3…) i registrar l'autoria dels sons utilitzats.                               Accessibilitat
                                                                                                                                                              Física
TEMPORALITZACIÓ      2 sessions                                                                                                                               Sensorial
                        Sessió 14: cerca de sons de fons i efectes (Pixabay, Freesound); muntatge en pistes amb fade in i fade out i la veu per               Cognitiva
                        damunt de la música.                                                                                                                  Emocional
                        Sessió 15: revisió de volums, exportació de tots els MP3 i dels projectes .aup3; registre de l'autoria i la llicència de cada     Considera la perspectiva cultural, de gènere i
                        so.                                                                                                                               socioeconòmica.
                                                                                                                                                          Considera la connexió amb els desafiaments,
MESURES DE           METODOLOGIA /        Treball individual autònom amb revisió del professor i escolta creuada entre companys.                          ODS i afavoreix el rol actiu de l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                           Aconsegueix la màxima implicació i
                                                                                                                                                          participació de tot l'alumnat.
                     RECURSOS             Audacity; bancs de sons lliures; auriculars; plantilla de registre de recursos i llicències.                    Du a terme un seguiment continu
                     MATERIALS,                                                                                                                           proporcionant feedback.
                     PERSONALS I                                                                                                                          Presenta la informació a l'alumnat utilitzant
                     ESPACIALS                                                                                                                            diferents formats.
                                                                                                                                                          Afavoreix la reflexió i el processament de la
MESURES DE           Llista de passos numerada i reduïda (sense efectes); sons de fons preseleccionats; suport individual en els volums; per a            informació a diferents nivells.
                                                                                                                                                          Ofereix a l'alumnat diferents maneres
RESPOSTA (III, IV)   l'alumnat d'altes capacitats, diverses pistes d'efectes i equalització.
                                                                                                                                                          d'expressió del coneixement.

CODI CRITERIS        CE5.3, CE5.5
D'AVALUACIÓ




                                                                                                                                                                                                 18 de 61
                                                                                 Tasca 7: Aprenem Kdenlive

OBJECTIUS DE LA         Conéixer la interfície de Kdenlive (safata de projecte, monitor, pistes i línia de temps).                                            APRENENTATGE ACCESSIBLE
TASCA                   Practicar amb activitats guiades la importació, el retall, les transicions, els títols i l'exportació d'un vídeo.                       Accessibilitat
                                                                                                                                                                    Física
TEMPORALITZACIÓ      2 sessions                                                                                                                                     Sensorial
                        Sessió 16: interfície, perfil del projecte, importació de clips, imatges i àudio, retall i ordenació a la línia de temps (activitat         Cognitiva
                        1).                                                                                                                                         Emocional
                        Sessió 17: transicions, clips de títol, música de fons i exportació a MP4 (resolució i fotogrames per segon) (activitat 2).             Considera la perspectiva cultural, de gènere i
                                                                                                                                                                socioeconòmica.
MESURES DE           METODOLOGIA /        Demostració projectada i pràctica guiada individual amb material de prova.                                            Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                                 ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                                Aconsegueix la màxima implicació i
                     RECURSOS             Kdenlive (LliureX); imatges, clips i àudios de pràctica; fitxes d'activitats; web de la matèria.                      participació de tot l'alumnat.
                     MATERIALS,                                                                                                                                 Du a terme un seguiment continu
                     PERSONALS I                                                                                                                                proporcionant feedback.
                     ESPACIALS                                                                                                                                  Presenta la informació a l'alumnat utilitzant
                                                                                                                                                                diferents formats.
MESURES DE           Projecte de pràctica ja començat; targeta amb les dreceres principals; temps ampliat; per a l'alumnat d'altes capacitats,                  Afavoreix la reflexió i el processament de la
RESPOSTA (III, IV)   efectes i fotogrames clau.                                                                                                                 informació a diferents nivells.
                                                                                                                                                                Ofereix a l'alumnat diferents maneres
                                                                                                                                                                d'expressió del coneixement.
CODI CRITERIS        CE5.4
D'AVALUACIÓ




                                                                                                                                                                                                       19 de 61
                                                                         Tasca 8: Muntem el vídeo del còmic

OBJECTIUS DE LA         Muntar el vídeo sincronitzant cada vinyeta amb el seu àudio, sense buits entre clips.                                          APRENENTATGE ACCESSIBLE
TASCA                   Afegir una introducció (títol, nom, curs), transicions i un final amb crèdits i l'ODS treballat, i exportar a MP4.               Accessibilitat
                                                                                                                                                             Física
TEMPORALITZACIÓ      2 sessions                                                                                                                              Sensorial
                        Sessió 18: importació de vinyetes i àudios, introducció amb música i muntatge de totes les vinyetes ajustant la durada de            Cognitiva
                        cada imatge a la del seu àudio.                                                                                                      Emocional
                        Sessió 19: transicions, crèdits amb l'ODS i l'autoria dels recursos, revisió del so i exportació de comic_Nom_Cognom.mp4;        Considera la perspectiva cultural, de gènere i
                        lliurament a Aules o enllaç del núvol.                                                                                           socioeconòmica.
                                                                                                                                                         Considera la connexió amb els desafiaments,
MESURES DE           METODOLOGIA /        Treball individual autònom amb revisió del professor.                                                          ODS i afavoreix el rol actiu de l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                          Aconsegueix la màxima implicació i
                                                                                                                                                         participació de tot l'alumnat.
                     RECURSOS             Kdenlive; carpetes Vinyetes i audios; música lliure de drets; rúbrica del vídeo.                               Du a terme un seguiment continu
                     MATERIALS,                                                                                                                          proporcionant feedback.
                     PERSONALS I                                                                                                                         Presenta la informació a l'alumnat utilitzant
                     ESPACIALS                                                                                                                           diferents formats.
                                                                                                                                                         Afavoreix la reflexió i el processament de la
MESURES DE           Projecte de vídeo amb la introducció ja feta; reducció de requisits (sense transicions); temps ampliat; per a l'alumnat d'altes     informació a diferents nivells.
                                                                                                                                                         Ofereix a l'alumnat diferents maneres
RESPOSTA (III, IV)   capacitats, títols animats i música de fons general.
                                                                                                                                                         d'expressió del coneixement.

CODI CRITERIS        CE5.4, CE5.5
D'AVALUACIÓ




                                                                                                                                                                                                20 de 61
                                                                Tasca 9: Vídeo de la cançó «Con ellos aprendí»

OBJECTIUS DE LA         Muntar un vídeo sobre la cançó «Con ellos aprendí» sincronitzant imatges, text i música.                                            APRENENTATGE ACCESSIBLE
TASCA                   Reflexionar sobre l'ús d'obres amb drets d'autoria en un context educatiu i citar-ne correctament l'autoria.                          Accessibilitat
                                                                                                                                                                  Física
TEMPORALITZACIÓ      2 sessions                                                                                                                                   Sensorial
                        Sessió 20: selecció i preparació de les imatges i els textos; muntatge sobre la pista de la cançó marcant els canvis amb el               Cognitiva
                        ritme.                                                                                                                                    Emocional
                        Sessió 21: ajustos de sincronització, títols i crèdits (autoria de la cançó i de les imatges), exportació i breu reflexió escrita     Considera la perspectiva cultural, de gènere i
                        sobre els drets d'autoria.                                                                                                            socioeconòmica.
                                                                                                                                                              Considera la connexió amb els desafiaments,
MESURES DE           METODOLOGIA /        Treball individual o en parella amb revisió del professor.                                                          ODS i afavoreix el rol actiu de l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                               Aconsegueix la màxima implicació i
                                                                                                                                                              participació de tot l'alumnat.
                     RECURSOS             Kdenlive; pista de la cançó proporcionada pel professor; imatges pròpies o lliures de drets; fitxa de               Du a terme un seguiment continu
                     MATERIALS,                                                                                                                               proporcionant feedback.
                                          reflexió.
                     PERSONALS I                                                                                                                              Presenta la informació a l'alumnat utilitzant
                     ESPACIALS                                                                                                                                diferents formats.
                                                                                                                                                              Afavoreix la reflexió i el processament de la
MESURES DE           Plantilla de projecte amb la cançó i les marques de temps; menys canvis d'imatge; temps ampliat; per a l'alumnat d'altes                 informació a diferents nivells.
                                                                                                                                                              Ofereix a l'alumnat diferents maneres
RESPOSTA (III, IV)   capacitats, lletra subtitulada i sincronitzada.
                                                                                                                                                              d'expressió del coneixement.

CODI CRITERIS        CE5.4, CE5.5
D'AVALUACIÓ




                                                                                                                                                                                                     21 de 61
                                                                              Tasca 10: Estrena i valoració

OBJECTIUS DE LA         Presentar el còmic al grup i valorar-ne el resultat.                                                                   APRENENTATGE ACCESSIBLE
TASCA                   Revisar el procés seguit i proposar millores a partir de la coavaluació.                                                 Accessibilitat
                                                                                                                                                     Física
TEMPORALITZACIÓ      1 sessió                                                                                                                        Sensorial
                        Sessió 22: estrena dels còmics, coavaluació amb rúbrica, autoavaluació del procés (guió, organització, autoria dels          Cognitiva
                        recursos) i propostes de millora.                                                                                            Emocional
                                                                                                                                                 Considera la perspectiva cultural, de gènere i
MESURES DE           METODOLOGIA /       Visionat en gran grup, coavaluació i autoavaluació individual.                                          socioeconòmica.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                  Considera la connexió amb els desafiaments,
                                                                                                                                                 ODS i afavoreix el rol actiu de l'alumnat.
                     RECURSOS            Projector i altaveus; rúbriques de coavaluació i d'autoavaluació.                                       Aconsegueix la màxima implicació i
                     MATERIALS,                                                                                                                  participació de tot l'alumnat.
                     PERSONALS I                                                                                                                 Du a terme un seguiment continu
                     ESPACIALS                                                                                                                   proporcionant feedback.
                                                                                                                                                 Presenta la informació a l'alumnat utilitzant
MESURES DE           Autoavaluació amb escala visual; possibilitat de presentar el còmic en grup reduït; temps addicional per a completar el     diferents formats.
RESPOSTA (III, IV)   lliurament.                                                                                                                 Afavoreix la reflexió i el processament de la
                                                                                                                                                 informació a diferents nivells.
CODI CRITERIS        CE5.6                                                                                                                       Ofereix a l'alumnat diferents maneres
D'AVALUACIÓ                                                                                                                                      d'expressió del coneixement.




                                                                                                                                                                                        22 de 61
5.2. SA2: Les meues apps amb App Inventor

                                                                                SA2: Les meues apps amb App Inventor

ÀREA /               IAPR II              NIVELL                3r ESO               TEMPORALITZACIÓ           14 sessions (1a avaluació (sessions 1-4) i 2a avaluació (sessions 5-14))
MATÈRIA /
ÀMBIT

CONTEXT              ☑ Personal        ☑ Educatiu       ☑ Social      ☐ Professional

DESCRIPCIÓ           L'alumnat, que en cursos anteriors ha programat per blocs amb Scratch o Code.org, passa de la programació seqüencial a la programació dirigida per esdeveniments, creant
                     aplicacions mòbils amb MIT App Inventor que prova en directe al seu mòbil amb AI2 Companion. Després de conéixer la interfície del programa, construeix quatre apps de
                     complexitat creixent: Endevinar número, Marcador handbol, Pedra, paper i tisora i Atrapa el talp.

REPTE O              «Programa les teues pròpies apps.» Crea jocs i ferramentes que funcionen de veritat al teu mòbil.
PREGUNTA

PROBLEMA             L'alumnat usa apps a diari però no sap com es construeixen. Li costa analitzar un problema abans de programar, triar les estructures adequades (variables, condicionals, llistes,
                     procediments) i depurar quan l'app no fa el que s'esperava.

PRODUCTE             Intermedis: apps Endevinar número, Marcador handbol i Pedra, paper i tisora (arxius .aia).
INTERMEDI I/O        Final: joc Atrapa el talp funcionant al mòbil, amb fitxa de proves i crèdits dels recursos utilitzats.
FINAL

RELACIÓ AMB          Repte del s. XXI: aprofitament crític i creatiu de la cultura digital; passar de consumidor a creador de tecnologia.
ELS REPTES           ODS 9: Indústria, innovació i infraestructura i ODS 4: Educació de qualitat: l'alumnat desenvolupa competències de programació que obrin camí a professions
DEL S. XXI I         tecnològiques.
ELS ODS

CCL: Competència en comunicació lingüística CP: Competència plurilingüe STEM: Competència matemàtica i competència en ciència, tecnologia i enginyeria CD: Competència digital
CPSAA: Competència personal, social i d'aprendre a aprendre CC: Competència ciutadana CCEC: Competència en consciència i expressió cultural CE: Competència emprenedora




                                                                                                                                                                                                  23 de 61
                                                                                SA2: Les meues apps amb App Inventor

COMPETÈNCIES          CD,              COMPETÈNCIES          Competència específica del currículum: CE2. Aplicar el pensament computacional en                                   CRITERIS      CE2: CE2.1, CE2.2, CE2.3,
CLAU                  STEM,            ESPECÍFIQUES          l'anàlisi i resolució de problemes bàsics significatius per a l'alumnat mitjançant el                               D'AVALUACIÓ   CE2.4, CE2.5
                      CPSAA,                                 desenvolupament de programari.                                                                                                    CE4: CE4.3, CE4.4
                      CE                                     Competència específica del currículum: CE4. Afrontar reptes tecnològics senzills i
                                                             proposar solucions mitjançant la programació, la intel·ligència artificial i la robòtica, analitzant
                                                             les possibilitats i valorant críticament les implicacions ètiques i ecosocials.

SABERS                     Interpretació de la realitat mitjançant modelatge de problemes.
BÀSICS I                   Abstracció, seqüenciació, algorítmica i la seua representació amb llenguatge natural i diagrames de flux.
ALTRES                     Detecció i reutilització de patrons. Generalització.
SABERS                     Estructures de control del flux del programa.
                           Variables, constants, condicions i operadors.
                           Programació d'aplicacions per a dispositius mòbils.
                           Avaluació i manteniment de programari.
                           Llicències de programari. El programari lliure i el programari propietari.
                           Iniciativa, autoconfiança i metacognició en el procés d'aprenentatge del desenvolupament de programari.
                           App Inventor: dissenyador i blocs, components i propietats, esdeveniments, llistes, procediments i rellotges (Clock).

CCL: Competència en comunicació lingüística CP: Competència plurilingüe STEM: Competència matemàtica i competència en ciència, tecnologia i enginyeria CD: Competència digital
CPSAA: Competència personal, social i d'aprendre a aprendre CC: Competència ciutadana CCEC: Competència en consciència i expressió cultural CE: Competència emprenedora




                                                                                                                                                                                                                  24 de 61
                                                                                              SA2: criteris d'avaluació


Criteris d'avaluació que es treballen en aquesta situació d'aprenentatge, tasques on es recullen les evidències i pes de cada criteri dins de la seua competència específica. La situació d'aprenentatge és el
context on s'avaluen els criteris: la nota de cada criteri passa a la seua CE i les CE donen la nota de l'avaluació i la final (apartat 6). Per això la SA no té una nota pròpia i aquests pesos no han de sumar
100 % dins de la SA.

 Criteri      Descripció                                                                                                                                Tasques                                 Pes en la CE

 CE2.1        Analitzar problemes bàsics significatius per a l'alumnat, mitjançant l'ús de les estructures de control més adequades.                    T1, T2, T4                               20 % de CE2

 CE2.2        Avaluar i mantindre les aplicacions informàtiques desenvolupades pel mateix alumnat.                                                      T3, T6                                   15 % de CE2

 CE2.3        Planificar de manera autònoma la solució de problemes bàsics, utilitzant els algorismes i les estructures de dades més                    T2, T3, T4, T5                           20 % de CE2
              adequades.

 CE2.4        Programar aplicacions senzilles multiplataforma de manera autònoma per a resoldre problemes bàsics.                                       T1, T2, T4, T5                           35 % de CE2

 CE2.5        Aplicar i respectar els drets d'autoria, llicències de drets i explotació durant la creació de programari.                                T6                                       10 % de CE2

 CE4.3        Dissenyar solucions utilitzant la programació, la intel·ligència artificial i la robòtica triant l'opció que millor s'adapte als reptes   T5 (també en SA3, SA5)                   25 % de CE4
              plantejats.

 CE4.4        Gestionar situacions d'incertesa en entorns digitals i tecnològics amb una actitud positiva, i afrontar-les utilitzant el                 T3, T5 (també en SA3)                    15 % de CE4
              coneixement adquirit i sentint-se competent.




                                                                                                                                                                                                     25 de 61
                                                             Tasca 1: Interfície del programa i com utilitzar-lo

OBJECTIUS DE LA         Conéixer la interfície d'App Inventor (paleta, visor, components, propietats, mode Dissenyador i Blocs).                    APRENENTATGE ACCESSIBLE
TASCA                   Crear una primera app senzilla amb pantalles, imatges, etiquetes i botons, i provar-la al mòbil.                              Accessibilitat
                                                                                                                                                          Física
TEMPORALITZACIÓ      2 sessions                                                                                                                           Sensorial
                        Sessió 1: accés a App Inventor amb el compte educatiu, creació del projecte, recorregut per la interfície i connexió amb          Cognitiva
                        AI2 Companion o l'emulador.                                                                                                       Emocional
                        Sessió 2: primera app de prova (pantalles, disposicions, imatges, botons i navegació entre pantalles) i prova completa al     Considera la perspectiva cultural, de gènere i
                        mòbil.                                                                                                                        socioeconòmica.
                                                                                                                                                      Considera la connexió amb els desafiaments,
MESURES DE           METODOLOGIA /       Demostració projectada i reproducció simultània; després, treball individual autònom.                        ODS i afavoreix el rol actiu de l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                       Aconsegueix la màxima implicació i
                                                                                                                                                      participació de tot l'alumnat.
                     RECURSOS            MIT App Inventor (navegador amb compte educatiu); mòbils amb MIT AI2 Companion o emulador; xarxa             Du a terme un seguiment continu
                     MATERIALS,                                                                                                                       proporcionant feedback.
                                         del centre; web de la matèria.
                     PERSONALS I                                                                                                                      Presenta la informació a l'alumnat utilitzant
                     ESPACIALS                                                                                                                        diferents formats.
                                                                                                                                                      Afavoreix la reflexió i el processament de la
MESURES DE           Emulador per a l'alumnat sense mòbil; guia amb captures; plantilla de pantalla ja dissenyada; adaptació d'accés; per a           informació a diferents nivells.
                                                                                                                                                      Ofereix a l'alumnat diferents maneres
RESPOSTA (III, IV)   l'alumnat d'altes capacitats, pantalla addicional amb vídeo o enllaç.
                                                                                                                                                      d'expressió del coneixement.

CODI CRITERIS        CE2.1, CE2.4
D'AVALUACIÓ




                                                                                                                                                                                             26 de 61
                                                                                Tasca 2: Endevinar número

OBJECTIUS DE LA         Crear variables, generar números aleatoris i fer servir condicionals per a comparar valors.                              APRENENTATGE ACCESSIBLE
TASCA                   Comptar els intents i reiniciar el joc en encertar.                                                                        Accessibilitat
                                                                                                                                                       Física
TEMPORALITZACIÓ      2 sessions                                                                                                                        Sensorial
                        Sessió 3: anàlisi del problema amb diagrama de flux, disseny de la pantalla i blocs del botó COMPROVAR (major, menor,          Cognitiva
                        encertat).                                                                                                                     Emocional
                        Sessió 4: comptador d'intents, buidatge del camp de text, botó de tornar a començar i proves.                              Considera la perspectiva cultural, de gènere i
                                                                                                                                                   socioeconòmica.
MESURES DE           METODOLOGIA /         Anàlisi en gran grup, programació en parella (pilot i copilot) amb rols rotatius i proves creuades.     Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                    ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                   Aconsegueix la màxima implicació i
                     RECURSOS              App Inventor; fitxa del diagrama de flux; enunciat a la web de la matèria.                              participació de tot l'alumnat.
                     MATERIALS,                                                                                                                    Du a terme un seguiment continu
                     PERSONALS I                                                                                                                   proporcionant feedback.
                     ESPACIALS                                                                                                                     Presenta la informació a l'alumnat utilitzant
                                                                                                                                                   diferents formats.
MESURES DE           Diagrama de flux ja fet; blocs clau mostrats en una targeta; reducció a la versió sense intents; per a l'alumnat d'altes      Afavoreix la reflexió i el processament de la
RESPOSTA (III, IV)   capacitats, límit d'intents i nivells de dificultat.                                                                          informació a diferents nivells.
                                                                                                                                                   Ofereix a l'alumnat diferents maneres
                                                                                                                                                   d'expressió del coneixement.
CODI CRITERIS        CE2.1, CE2.3, CE2.4
D'AVALUACIÓ




                                                                                                                                                                                          27 de 61
                                                                                Tasca 3: Marcador handbol

OBJECTIUS DE LA         Planificar la solució a partir d'un esquelet de requisits sense instruccions pas a pas.                                     APRENENTATGE ACCESSIBLE
TASCA                   Gestionar dues variables, evitar valors negatius i habilitar o bloquejar botons segons l'estat del partit.                    Accessibilitat
                                                                                                                                                          Física
TEMPORALITZACIÓ      3 sessions                                                                                                                           Sensorial
                        Sessió 5: lectura de requisits i planificació (variables, valors inicials, quan es reinicien); disseny dels 6 botons.             Cognitiva
                        Sessió 6: programació de gol i descomptar gol (sense baixar de 0) per als dos equips.                                             Emocional
                        Sessió 7: botons iniciar i finalitzar partit, proves de casos límit i correcció d'errors.                                     Considera la perspectiva cultural, de gènere i
                                                                                                                                                      socioeconòmica.
MESURES DE           METODOLOGIA /         Resolució de problemes en parella: primer es pensa sobre paper i després es programa. Depuració guiada     Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT            amb preguntes.                                                                                             ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                      Aconsegueix la màxima implicació i
                                                                                                                                                      participació de tot l'alumnat.
                     RECURSOS              App Inventor; vídeo de l'app de mostra; fitxa de planificació i de proves.
                                                                                                                                                      Du a terme un seguiment continu
                     MATERIALS,
                                                                                                                                                      proporcionant feedback.
                     PERSONALS I
                                                                                                                                                      Presenta la informació a l'alumnat utilitzant
                     ESPACIALS
                                                                                                                                                      diferents formats.
                                                                                                                                                      Afavoreix la reflexió i el processament de la
MESURES DE           Esquelet de blocs parcialment muntat; pistes graduades; temps ampliat; per a l'alumnat d'altes capacitats, cronòmetre del
                                                                                                                                                      informació a diferents nivells.
RESPOSTA (III, IV)   partit i registre del resultat.
                                                                                                                                                      Ofereix a l'alumnat diferents maneres
                                                                                                                                                      d'expressió del coneixement.
CODI CRITERIS        CE2.2, CE2.3, CE4.4
D'AVALUACIÓ




                                                                                                                                                                                             28 de 61
                                                                               Tasca 4: Pedra, paper i tisora

OBJECTIUS DE LA         Fer servir llistes, elements aleatoris i condicionals niats per a decidir el resultat.                                       APRENENTATGE ACCESSIBLE
TASCA                   Crear un procediment i reutilitzar-lo; comptar partides guanyades i reiniciar.                                                 Accessibilitat
                                                                                                                                                           Física
TEMPORALITZACIÓ      3 sessions                                                                                                                            Sensorial
                        Sessió 8: disseny (disposicions visibles i ocultes, imatges), llista d'imatges i elecció aleatòria de la màquina.                  Cognitiva
                        Sessió 9: comprovació de la jugada amb tots els casos.                                                                             Emocional
                        Sessió 10: comptador de victòries, procediment acabar i botó de tornar a començar.                                             Considera la perspectiva cultural, de gènere i
                                                                                                                                                       socioeconòmica.
MESURES DE           METODOLOGIA /         Demostració dels conceptes nous (llistes i procediments) i treball individual autònom amb tutoria entre     Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT            iguals.                                                                                                     ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                       Aconsegueix la màxima implicació i
                                                                                                                                                       participació de tot l'alumnat.
                     RECURSOS              App Inventor; imatges pedra.png, paper.png, tisores.png; enunciat a la web.
                                                                                                                                                       Du a terme un seguiment continu
                     MATERIALS,
                                                                                                                                                       proporcionant feedback.
                     PERSONALS I
                                                                                                                                                       Presenta la informació a l'alumnat utilitzant
                     ESPACIALS
                                                                                                                                                       diferents formats.
                                                                                                                                                       Afavoreix la reflexió i el processament de la
MESURES DE           Taula de casos ja completada; blocs de la comprovació en targeta; versió sense procediment; per a l'alumnat d'altes
                                                                                                                                                       informació a diferents nivells.
RESPOSTA (III, IV)   capacitats, variant «pedra, paper, tisora, sargantana, Spock».
                                                                                                                                                       Ofereix a l'alumnat diferents maneres
                                                                                                                                                       d'expressió del coneixement.
CODI CRITERIS        CE2.1, CE2.3, CE2.4
D'AVALUACIÓ




                                                                                                                                                                                              29 de 61
                                                                                   Tasca 5: Atrapa el talp

OBJECTIUS DE LA         Programar un joc amb dos rellotges (Clock), un interval aleatori i una graella de 3 × 3.                                          APRENENTATGE ACCESSIBLE
TASCA                   Dissenyar la solució de manera autònoma: saber on és el talp, comptar talps restants i temps, i reiniciar.                          Accessibilitat
                                                                                                                                                                Física
TEMPORALITZACIÓ      3 sessions                                                                                                                                 Sensorial
                        Sessió 11: anàlisi de la descripció i planificació (quines variables, quins esdeveniments); disseny de la graella.                      Cognitiva
                        Sessió 12: programació del moviment aleatori, el toc sobre el talp i el temps.                                                          Emocional
                        Sessió 13: final de partida, reinici, proves amb companys i fitxa de proves.                                                        Considera la perspectiva cultural, de gènere i
                                                                                                                                                            socioeconòmica.
MESURES DE           METODOLOGIA /        Projecte individual autònom amb sessions de consulta («pregunta a dos abans que a mi») i depuració per            Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT           parelles.                                                                                                         ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                            Aconsegueix la màxima implicació i
                                                                                                                                                            participació de tot l'alumnat.
                     RECURSOS             App Inventor; imatges del talp i dels forats (lliures de drets o pròpies); fitxa de proves; rúbrica de l'app.
                                                                                                                                                            Du a terme un seguiment continu
                     MATERIALS,
                                                                                                                                                            proporcionant feedback.
                     PERSONALS I
                                                                                                                                                            Presenta la informació a l'alumnat utilitzant
                     ESPACIALS
                                                                                                                                                            diferents formats.
                                                                                                                                                            Afavoreix la reflexió i el processament de la
MESURES DE           Graella de 2 × 2; un sol rellotge; pistes graduades; per a l'alumnat d'altes capacitats, nivells de velocitat i rècord guardat.
                                                                                                                                                            informació a diferents nivells.
RESPOSTA (III, IV)
                                                                                                                                                            Ofereix a l'alumnat diferents maneres
                                                                                                                                                            d'expressió del coneixement.
CODI CRITERIS        CE2.3, CE2.4, CE4.3, CE4.4
D'AVALUACIÓ




                                                                                                                                                                                                   30 de 61
                                                                       Tasca 6: Revisió i lliurament de les apps

OBJECTIUS DE LA         Avaluar i millorar les apps pròpies corregint errors detectats en les proves.                                                   APRENENTATGE ACCESSIBLE
TASCA                   Indicar l'autoria i la llicència dels recursos utilitzats i conéixer la diferència entre programari lliure i propietari.          Accessibilitat
                                                                                                                                                              Física
TEMPORALITZACIÓ      1 sessió                                                                                                                                 Sensorial
                        Sessió 14: revisió final, pantalla de crèdits, exportació dels arxius .aia (i .apk si escau), breu explicació de llicències i         Cognitiva
                        autoavaluació de la SA.                                                                                                               Emocional
                                                                                                                                                          Considera la perspectiva cultural, de gènere i
MESURES DE           METODOLOGIA /        Treball individual i coavaluació d'una app d'un company.                                                        socioeconòmica.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                           Considera la connexió amb els desafiaments,
                                                                                                                                                          ODS i afavoreix el rol actiu de l'alumnat.
                     RECURSOS             App Inventor; llista de control de proves; rúbrica d'autoavaluació.                                             Aconsegueix la màxima implicació i
                     MATERIALS,                                                                                                                           participació de tot l'alumnat.
                     PERSONALS I                                                                                                                          Du a terme un seguiment continu
                     ESPACIALS                                                                                                                            proporcionant feedback.
                                                                                                                                                          Presenta la informació a l'alumnat utilitzant
MESURES DE           Llista de control reduïda; suport en l'exportació; temps addicional per a completar les apps pendents.                               diferents formats.
RESPOSTA (III, IV)                                                                                                                                        Afavoreix la reflexió i el processament de la
                                                                                                                                                          informació a diferents nivells.
CODI CRITERIS        CE2.2, CE2.5                                                                                                                         Ofereix a l'alumnat diferents maneres
D'AVALUACIÓ                                                                                                                                               d'expressió del coneixement.




                                                                                                                                                                                                 31 de 61
5.3. SA3: Codi i rodes: robòtica amb micro:bit

                                                                               SA3: Codi i rodes: robòtica amb micro:bit

ÀREA /               IAPR II              NIVELL                3r ESO              TEMPORALITZACIÓ            16 sessions (2a avaluació (sessions 1-10) i 3a avaluació (sessions 11-16))
MATÈRIA /
ÀMBIT

CONTEXT              ☐ Personal      ☑ Educatiu        ☑ Social      ☑ Professional

DESCRIPCIÓ           L'alumnat porta la programació al món físic amb la placa micro:bit i el robot Maqueen, programats per blocs amb MakeCode. Primer coneix la placa (panell de LED, botons i sensors
                     de temperatura, acceleròmetre, llum i brúixola) i la comunicació per ràdio entre plaques amb el projecte «Guardià vital»; després munta i programa el robot (motors, LED RGB,
                     sensor d'ultrasons i seguidor de línies), el controla de manera remota i participa en un concurs de robots. Tot el bloc es treballa per parelles.

REPTE O              «Fes que un robot prenga decisions.» Programa una placa i un robot que senten l'entorn, decidisquen i actuen, i demostra-ho en el concurs de robots.
PREGUNTA

PROBLEMA             L'alumnat sap programar en pantalla però no relaciona el codi amb el món físic: no distingeix entre un automatisme i un sistema que reacciona a l'entorn, ni sap triar els sensors i
                     actuadors adequats o comprovar si una solució és eficaç, segura i útil per a les persones.

PRODUCTE             Intermedis: pràctiques amb la placa (P01-P07) i projecte «Guardià vital» (detector de caigudes i d'inactivitat amb alarma per ràdio).
INTERMEDI I/O        Final: robot Maqueen programat per a evitar obstacles, seguir línies i ser controlat a distància, que competeix en les proves del concurs (SumoRobots i CorreCamins).
FINAL

RELACIÓ AMB          Repte del s. XXI: resolució de problemes en equip i aprofitament de la tecnologia per a millorar la vida de les persones.
ELS REPTES           ODS 9: Indústria, innovació i infraestructura i ODS 3: Salut i benestar: el «Guardià vital» i el dispositiu per a persones invidents mostren com la robòtica pot ajudar persones
DEL S. XXI I         grans o amb discapacitat.
ELS ODS

CCL: Competència en comunicació lingüística CP: Competència plurilingüe STEM: Competència matemàtica i competència en ciència, tecnologia i enginyeria CD: Competència digital
CPSAA: Competència personal, social i d'aprendre a aprendre CC: Competència ciutadana CCEC: Competència en consciència i expressió cultural CE: Competència emprenedora




                                                                                                                                                                                                   32 de 61
                                                                               SA3: Codi i rodes: robòtica amb micro:bit

COMPETÈNCIES          STEM,            COMPETÈNCIES          Competència específica del currículum: CE3. Muntar sistemes robòtics senzills, analitzant                           CRITERIS      CE3: CE3.1, CE3.2, CE3.3,
CLAU                  CD,              ESPECÍFIQUES          les respostes que proporcionen en la seua interacció amb l'entorn i valorant l'eficàcia                             D'AVALUACIÓ   CE3.4, CE3.5, CE3.6
                      CPSAA,                                 d'aquestes davant dels reptes plantejats.                                                                                         CE4: CE4.1, CE4.3, CE4.4,
                      CE,                                    Competència específica del currículum: CE4. Afrontar reptes tecnològics senzills i                                                CE4.5
                      CC                                     proposar solucions mitjançant la programació, la intel·ligència artificial i la robòtica, analitzant
                                                             les possibilitats i valorant críticament les implicacions ètiques i ecosocials.

SABERS                     Muntatge de robots.
BÀSICS I                   Control de sistemes robotitzats.
ALTRES                     Sensors, actuadors i controladors.
SABERS                     Càrrega i execució dels algorismes en robots.
                           Sistemes robotitzats en l'experimentació amb prototips dissenyats.
                           Simuladors de targetes controladores (simulador de MakeCode).
                           Placa micro:bit: panell de LED, botons, temperatura, acceleròmetre, llum, brúixola i ràdio.
                           Robot Maqueen: motors, LED RGB, sensor d'ultrasons i seguidor de línies.
                           Esquema sensor → programa → actuador. Automatisme enfront de sistema que reacciona a l'entorn.
                           Sostenibilitat i inclusió com a requisits del disseny.

CCL: Competència en comunicació lingüística CP: Competència plurilingüe STEM: Competència matemàtica i competència en ciència, tecnologia i enginyeria CD: Competència digital
CPSAA: Competència personal, social i d'aprendre a aprendre CC: Competència ciutadana CCEC: Competència en consciència i expressió cultural CE: Competència emprenedora




                                                                                                                                                                                                                  33 de 61
                                                                                              SA3: criteris d'avaluació


Criteris d'avaluació que es treballen en aquesta situació d'aprenentatge, tasques on es recullen les evidències i pes de cada criteri dins de la seua competència específica. La situació d'aprenentatge és el
context on s'avaluen els criteris: la nota de cada criteri passa a la seua CE i les CE donen la nota de l'avaluació i la final (apartat 6). Per això la SA no té una nota pròpia i aquests pesos no han de sumar
100 % dins de la SA.

 Criteri      Descripció                                                                                                                                Tasques                                 Pes en la CE

 CE3.1        Muntar robots de major complexitat emprant sensors, actuadors i altres operadors.                                                         T4                                       20 % de CE3

 CE3.2        Connectar, transferir i validar l'execució del programa de control seleccionat al robot.                                                  T1, T4                                   15 % de CE3

 CE3.3        Seleccionar els mòduls d'entrada i eixida per a muntar robots senzills, que siguen capaços de fer tasques de manera autònoma.             T2, T3, T5                               15 % de CE3

 CE3.4        Analitzar i avaluar l'eficàcia de la interacció del robot amb l'entorn.                                                                   T2, T3, T4, T6                           15 % de CE3

 CE3.5        Programar instruccions senzilles multiplataforma de manera autònoma per a controlar un robot programable.                                 T1, T2, T4                               20 % de CE3

 CE3.6        Controlar el robot per part de l'usuari en temps real i de manera remota.                                                                 T5                                       15 % de CE3

 CE4.1        Planificar tasques senzilles, crear estructures d'equips de treball, distribuir funcions i responsabilitats de les persones integrants    T5, T6                                   20 % de CE4
              i col·laborar proactivament en el desenvolupament de solucions digitals i tecnològiques.

 CE4.3        Dissenyar solucions utilitzant la programació, la intel·ligència artificial i la robòtica triant l'opció que millor s'adapte als reptes   T3, T6 (també en SA2, SA5)               25 % de CE4
              plantejats.

 CE4.4        Gestionar situacions d'incertesa en entorns digitals i tecnològics amb una actitud positiva, i afrontar-les utilitzant el                 T6 (també en SA2)                        15 % de CE4
              coneixement adquirit i sentint-se competent.

 CE4.5        Aplicar la sostenibilitat i inclusió com a requisits del disseny de solucions tecnològiques.                                              T3, T4                                   20 % de CE4




                                                                                                                                                                                                     34 de 61
                                                                     Tasca 1: Primers passos amb micro:bit

OBJECTIUS DE LA         Conéixer la placa micro:bit i l'entorn MakeCode: crear, guardar, simular i carregar un programa.                               APRENENTATGE ACCESSIBLE
TASCA                   Programar el panell de LED i els botons A, B i tàctil (pràctiques P01 i P02).                                                    Accessibilitat
                                                                                                                                                             Física
TEMPORALITZACIÓ      2 sessions                                                                                                                              Sensorial
                        Sessió 1: presentació del bloc i normes d'ús del material; interfície de MakeCode, simulador, «Hola món» i càrrega a la              Cognitiva
                        placa; P01 (provem el panell de LED, cor bategant, imatges pròpies).                                                                 Emocional
                        Sessió 2: P02 (botons de la placa i més accions) i brillantor del panell. Ampliació: LED «cotxe fantàstic» i desplaçament de     Considera la perspectiva cultural, de gènere i
                        LED.                                                                                                                             socioeconòmica.
                                                                                                                                                         Considera la connexió amb els desafiaments,
MESURES DE           METODOLOGIA /       Demostració projectada i treball per parelles (pilot i copilot) amb rols rotatius. Comprovació creuada amb      ODS i afavoreix el rol actiu de l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                          Aconsegueix la màxima implicació i
                                         una altra parella.
                                                                                                                                                         participació de tot l'alumnat.
                                                                                                                                                         Du a terme un seguiment continu
                     RECURSOS            Plaques micro:bit V2 amb cable i bateria; MakeCode (navegador); fitxes P01 i P02 a Aules; fulla de
                                                                                                                                                         proporcionant feedback.
                     MATERIALS,          responsabilitat del material.
                                                                                                                                                         Presenta la informació a l'alumnat utilitzant
                     PERSONALS I
                                                                                                                                                         diferents formats.
                     ESPACIALS
                                                                                                                                                         Afavoreix la reflexió i el processament de la
                                                                                                                                                         informació a diferents nivells.
MESURES DE           Simulador en pantalla per a qui no puga manipular la placa; targetes de blocs amb captures; parella de suport; per a l'alumnat
                                                                                                                                                         Ofereix a l'alumnat diferents maneres
RESPOSTA (III, IV)   d'altes capacitats, animacions pròpies amb variables.
                                                                                                                                                         d'expressió del coneixement.

CODI CRITERIS        CE3.2, CE3.5
D'AVALUACIÓ




                                                                                                                                                                                                35 de 61
                                                                            Tasca 2: Els sensors de la placa

OBJECTIUS DE LA         Llegir els sensors de la placa (temperatura, acceleròmetre, llum i brúixola) i mostrar-ne els valors.                            APRENENTATGE ACCESSIBLE
TASCA                   Programar respostes amb condicionals, operadors i variables segons el valor dels sensors (P03, P04, P05 i P07).                    Accessibilitat
                                                                                                                                                               Física
TEMPORALITZACIÓ      2 sessions                                                                                                                                Sensorial
                        Sessió 3: P03 (temperatura actual i en graus Celsius) i P04 (acceleròmetre: gestos i accions preprogramades). Ampliació:               Cognitiva
                        compte regressiu, comptador de passos i joc de pendent.                                                                                Emocional
                        Sessió 4: P05 (intensitat de llum i llindar) i P07 (brúixola). Selecció del sensor adequat per a diferents situacions              Considera la perspectiva cultural, de gènere i
                        quotidianes.                                                                                                                       socioeconòmica.
                                                                                                                                                           Considera la connexió amb els desafiaments,
MESURES DE           METODOLOGIA /         Pràctiques actives en tres fases (motivació amb un vídeo o repte, explicació breu, aplicació) per parelles.     ODS i afavoreix el rol actiu de l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                            Aconsegueix la màxima implicació i
                                                                                                                                                           participació de tot l'alumnat.
                     RECURSOS              Plaques micro:bit; MakeCode; fitxes P03-P07; llanterna o mòbil per a provar el sensor de llum.                  Du a terme un seguiment continu
                     MATERIALS,                                                                                                                            proporcionant feedback.
                     PERSONALS I                                                                                                                           Presenta la informació a l'alumnat utilitzant
                     ESPACIALS                                                                                                                             diferents formats.
                                                                                                                                                           Afavoreix la reflexió i el processament de la
MESURES DE           Programes de base ja començats; reducció a dos sensors; suport individual en els condicionals; per a l'alumnat d'altes                informació a diferents nivells.
                                                                                                                                                           Ofereix a l'alumnat diferents maneres
RESPOSTA (III, IV)   capacitats, combinació de dos sensors en un mateix programa.
                                                                                                                                                           d'expressió del coneixement.

CODI CRITERIS        CE3.3, CE3.4, CE3.5
D'AVALUACIÓ




                                                                                                                                                                                                  36 de 61
                                                            Tasca 3: Comunicació per ràdio: el «Guardià vital»

OBJECTIUS DE LA         Comunicar dues plaques per ràdio (emissor, receptor i canals) (P06).                                                          APRENENTATGE ACCESSIBLE
TASCA                   Dissenyar un dispositiu que detecte caigudes i inactivitat d'una persona i envie una alarma a una altra placa.                  Accessibilitat
                                                                                                                                                            Física
TEMPORALITZACIÓ      2 sessions                                                                                                                             Sensorial
                        Sessió 5: teoria de les comunicacions per ràdio; P06A i P06B (comunicació entre dues plaques).                                      Cognitiva
                        Sessió 6: «Guardià vital» per fases: detectar caiguda (amb dues millores), detectar inactivitat, generar l'alarma i opcions         Emocional
                        lliures.                                                                                                                        Considera la perspectiva cultural, de gènere i
                                                                                                                                                        socioeconòmica.
MESURES DE           METODOLOGIA /       Treball en equips de dues parelles (una placa emissora i una receptora). Disseny per fases amb                 Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT          comprovació de cada fase.                                                                                      ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                        Aconsegueix la màxima implicació i
                                                                                                                                                        participació de tot l'alumnat.
                     RECURSOS            Dues plaques per equip; MakeCode; fitxa del projecte «Guardià vital».
                                                                                                                                                        Du a terme un seguiment continu
                     MATERIALS,
                                                                                                                                                        proporcionant feedback.
                     PERSONALS I
                                                                                                                                                        Presenta la informació a l'alumnat utilitzant
                     ESPACIALS
                                                                                                                                                        diferents formats.
                                                                                                                                                        Afavoreix la reflexió i el processament de la
MESURES DE           Fases 1 i 3 com a mínim; codi de l'emissor proporcionat; temps ampliat; per a l'alumnat d'altes capacitats, fase IV lliure amb
                                                                                                                                                        informació a diferents nivells.
RESPOSTA (III, IV)   registre d'esdeveniments.
                                                                                                                                                        Ofereix a l'alumnat diferents maneres
                                                                                                                                                        d'expressió del coneixement.
CODI CRITERIS        CE3.3, CE3.4, CE4.3, CE4.5
D'AVALUACIÓ




                                                                                                                                                                                               37 de 61
                                                           Tasca 4: El robot Maqueen: motors, llums i ultrasons

OBJECTIUS DE LA         Muntar el robot Maqueen amb la placa, importar-ne l'extensió a MakeCode i controlar els motors i els LED RGB.                APRENENTATGE ACCESSIBLE
TASCA                   Fer servir el sensor d'ultrasons perquè el robot pare, continue o evite obstacles, i dissenyar un dispositiu d'ajuda per a     Accessibilitat
                        persones invidents.                                                                                                                Física
                                                                                                                                                           Sensorial
TEMPORALITZACIÓ      3 sessions                                                                                                                            Cognitiva
                        Sessió 7: introducció al robot (vídeo de robots en magatzems), característiques, bones pràctiques i fulla de                       Emocional
                        responsabilitat; extensió del Maqueen i blocs de motor; P01M (moviment, com gira el motor, «Velociraptor»).                    Considera la perspectiva cultural, de gènere i
                        Sessió 8: P02M (LED RGB: «Pintant», com aparcar, colors segons els polsadors).                                                 socioeconòmica.
                                                                                                                                                       Considera la connexió amb els desafiaments,
                        Sessió 9: P03M (sensor d'ultrasons: parem i continuem, dispositiu per a invidents, evitem obstacles).
                                                                                                                                                       ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                       Aconsegueix la màxima implicació i
MESURES DE           METODOLOGIA /       Treball per parelles amb rols de muntador/a i programador/a que s'intercanvien; proves en el circuit de
                                                                                                                                                       participació de tot l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT          l'aula.
                                                                                                                                                       Du a terme un seguiment continu
                                                                                                                                                       proporcionant feedback.
                     RECURSOS            Robots Maqueen amb micro:bit i piles; circuit i obstacles; fitxes P01M-P03M; rúbrica de pràctiques.
                                                                                                                                                       Presenta la informació a l'alumnat utilitzant
                     MATERIALS,
                                                                                                                                                       diferents formats.
                     PERSONALS I
                                                                                                                                                       Afavoreix la reflexió i el processament de la
                     ESPACIALS
                                                                                                                                                       informació a diferents nivells.
                                                                                                                                                       Ofereix a l'alumnat diferents maneres
MESURES DE           Programes de moviment ja començats; circuit simplificat; suport en el muntatge; adaptació d'accés al material; per a
                                                                                                                                                       d'expressió del coneixement.
RESPOSTA (III, IV)   l'alumnat d'altes capacitats, velocitat proporcional a la distància.

CODI CRITERIS        CE3.1, CE3.2, CE3.4, CE3.5, CE4.5
D'AVALUACIÓ




                                                                                                                                                                                              38 de 61
                                                                    Tasca 5: Control remot i seguidor de línies

OBJECTIUS DE LA         Controlar el robot en temps real des d'una altra placa per ràdio (P04M).                                                        APRENENTATGE ACCESSIBLE
TASCA                   Programar el robot perquè seguisca un camí amb el mòdul seguidor de línies (P05M).                                                Accessibilitat
                                                                                                                                                              Física
TEMPORALITZACIÓ      4 sessions                                                                                                                               Sensorial
                        Sessió 10: repàs del mòdul de ràdio i comandament a distància; equips de 4 persones amb rols i diari d'equip.                         Cognitiva
                        Sessió 11: ampliacions del control remot (aparquem, conducció automàtica).                                                            Emocional
                        Sessió 12: seguidor de línies: exercici d'exploració dels sensors i primer recorregut.                                            Considera la perspectiva cultural, de gènere i
                        Sessió 13: «Seguim el camí!»: recorregut complet, ajustos de velocitat i girs. Reforç amb exercici guiat.                         socioeconòmica.
                                                                                                                                                          Considera la connexió amb els desafiaments,
MESURES DE           METODOLOGIA /         Equips de 4 (dues parelles) amb rols de cap d'equip, pilot, programador/a i verificador/a; planificació de     ODS i afavoreix el rol actiu de l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                           Aconsegueix la màxima implicació i
                                           les tasques en un diari d'equip.
                                                                                                                                                          participació de tot l'alumnat.
                                                                                                                                                          Du a terme un seguiment continu
                     RECURSOS              Robots Maqueen; plaques comandament; circuit amb línia negra; fitxes P04M i P05M; diari d'equip.
                                                                                                                                                          proporcionant feedback.
                     MATERIALS,
                                                                                                                                                          Presenta la informació a l'alumnat utilitzant
                     PERSONALS I
                                                                                                                                                          diferents formats.
                     ESPACIALS
                                                                                                                                                          Afavoreix la reflexió i el processament de la
                                                                                                                                                          informació a diferents nivells.
MESURES DE           Comandament ja programat (només cal el receptor); circuit de línia recta; rol adaptat dins de l'equip; per a l'alumnat d'altes
                                                                                                                                                          Ofereix a l'alumnat diferents maneres
RESPOSTA (III, IV)   capacitats, canvi automàtic entre mode remot i autònom.
                                                                                                                                                          d'expressió del coneixement.

CODI CRITERIS        CE3.3, CE3.6, CE4.1
D'AVALUACIÓ




                                                                                                                                                                                                 39 de 61
                                                                               Tasca 6: Concurs de robots

OBJECTIUS DE LA         Optimitzar el codi del robot per a les proves del concurs.                                                                      APRENENTATGE ACCESSIBLE
TASCA                   Participar en les proves SumoRobots i CorreCamins, analitzar l'eficàcia del robot i proposar millores.                            Accessibilitat
                                                                                                                                                              Física
TEMPORALITZACIÓ      3 sessions                                                                                                                               Sensorial
                        Sessió 14: explicació de les dues proves, estratègia d'equip i optimització del codi.                                                 Cognitiva
                        Sessió 15: proves d'entrenament i ajustos.                                                                                            Emocional
                        Sessió 16: concurs (SumoRobots i CorreCamins), coavaluació entre equips i autoavaluació del treball en equip.                     Considera la perspectiva cultural, de gènere i
                                                                                                                                                          socioeconòmica.
MESURES DE           METODOLOGIA /        Aprenentatge basat en reptes per equips, amb gamificació (concurs) i reflexió final.                            Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                           ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                          Aconsegueix la màxima implicació i
                     RECURSOS             Robots Maqueen; pista de sumo i circuit de carreres; fitxa d'estratègia; rúbriques de coavaluació i             participació de tot l'alumnat.
                     MATERIALS,           autoavaluació.                                                                                                  Du a terme un seguiment continu
                     PERSONALS I                                                                                                                          proporcionant feedback.
                     ESPACIALS                                                                                                                            Presenta la informació a l'alumnat utilitzant
                                                                                                                                                          diferents formats.
MESURES DE           Participació amb rols adaptats (cronometratge, àrbitre, estratègia); prova única; per a l'alumnat d'altes capacitats, estratègia     Afavoreix la reflexió i el processament de la
RESPOSTA (III, IV)   autònoma amb diversos sensors.                                                                                                       informació a diferents nivells.
                                                                                                                                                          Ofereix a l'alumnat diferents maneres
                                                                                                                                                          d'expressió del coneixement.
CODI CRITERIS        CE3.4, CE4.1, CE4.3, CE4.4
D'AVALUACIÓ




                                                                                                                                                                                                 40 de 61
5.4. SA4: Laboratori d'imatge: GIMP avançat

                                                                                SA4: Laboratori d'imatge: GIMP avançat

ÀREA /               IAPR II                            NIVELL                3r ESO                             TEMPORALITZACIÓ           8 sessions (3a avaluació)
MATÈRIA /
ÀMBIT

CONTEXT              ☑ Personal        ☑ Educatiu       ☐ Social      ☑ Professional

DESCRIPCIÓ           L'alumnat aprofundeix en l'edició d'imatge digital amb GIMP a partir de 16 pràctiques progressives: obrir, guardar i exportar, capes, alineació i distribució, modes de selecció, rutes,
                     degradats, fotomuntatge, canviar el color d'ulls, blanquejar dents, llevar arrugues, canviar la textura de la pell, enfocar i desenfocar, il·luminació, seleccionar per color, filtres bàsics
                     i llevar el fons. Cada pràctica es lliura a Aules en XCF i en el format d'exportació adequat.

REPTE O              «Converteix-te en editor/a d'imatge.» Domina les ferramentes d'un editor professional pràctica a pràctica.
PREGUNTA

PROBLEMA             L'alumnat veu cada dia imatges retocades sense saber com es fan. Quan edita, treballa sobre una sola capa, perd l'arxiu editable i tria malament el format d'exportació.

PRODUCTE             Intermedis: pràctiques 0-14 en XCF i imatges exportades a Aules.
INTERMEDI I/O        Final: pràctica 15 (llevar el fons) exportada en PNG amb transparència i carpeta completa de les 16 pràctiques.
FINAL

RELACIÓ AMB          Repte del s. XXI: consum responsable i aprofitament crític de la cultura digital; reconéixer la manipulació de les imatges.
ELS REPTES           ODS 3: Salut i benestar: en les pràctiques de retoc facial es comenta com els retocs de la publicitat i les xarxes socials influeixen en la imatge corporal.
DEL S. XXI I
ELS ODS

CCL: Competència en comunicació lingüística CP: Competència plurilingüe STEM: Competència matemàtica i competència en ciència, tecnologia i enginyeria CD: Competència digital
CPSAA: Competència personal, social i d'aprendre a aprendre CC: Competència ciutadana CCEC: Competència en consciència i expressió cultural CE: Competència emprenedora




                                                                                                                                                                                                          41 de 61
                                                                                SA4: Laboratori d'imatge: GIMP avançat

COMPETÈNCIES          CD,              COMPETÈNCIES          Competència específica d'ampliació del departament (GIMP avançat): CE6. Editar i                                    CRITERIS      CE6: CE6.1, CE6.2, CE6.3,
CLAU                  CCEC,            ESPECÍFIQUES          compondre imatges digitals amb un programa d'edició de mapes de bits, aplicant tècniques de                         D'AVALUACIÓ   CE6.4, CE6.5
                      CPSAA,                                 capes, selecció, rutes, ajustos, retoc i fotomuntatge, i conservant i exportant el treball en el
                      CE                                     format adequat.

SABERS                     Imatge de mapa de bits: píxels, resolució, dimensions i pes.
BÀSICS I                   Formats: XCF (treball) enfront de PNG i JPG (exportació); transparència i compressió.
ALTRES                     Capes: crear, ordenar, alinear, distribuir i opacitat.
SABERS                     Seleccions (rectangular, el·líptica, lliure, difusa, per color) i rutes.
                           Degradats, ajustos de color, il·luminació, enfocament i filtres.
                           Retoc fotogràfic, fotomuntatge i eliminació del fons.

CCL: Competència en comunicació lingüística CP: Competència plurilingüe STEM: Competència matemàtica i competència en ciència, tecnologia i enginyeria CD: Competència digital
CPSAA: Competència personal, social i d'aprendre a aprendre CC: Competència ciutadana CCEC: Competència en consciència i expressió cultural CE: Competència emprenedora




                                                                                                                                                                                                                  42 de 61
                                                                                           SA4: criteris d'avaluació


Criteris d'avaluació que es treballen en aquesta situació d'aprenentatge, tasques on es recullen les evidències i pes de cada criteri dins de la seua competència específica. La situació d'aprenentatge és el
context on s'avaluen els criteris: la nota de cada criteri passa a la seua CE i les CE donen la nota de l'avaluació i la final (apartat 6). Per això la SA no té una nota pròpia i aquests pesos no han de sumar
100 % dins de la SA.

 Criteri      Descripció                                                                                                                             Tasques                                    Pes en la CE

 CE6.1        Guardar els projectes en XCF, exportar les imatges en PNG o JPG segons la finalitat i organitzar els arxius originals i els treballs   T1, T2, T3, T4, T5, T6                      10 % de CE6
              realitzats.

 CE6.2        Compondre imatges amb capes, alineant i distribuint els elements amb precisió.                                                         T1, T2                                      15 % de CE6

 CE6.3        Seleccionar i aïllar elements amb els modes de selecció, les rutes i la selecció per color, i llevar el fons d'una imatge.             T2, T5                                      25 % de CE6

 CE6.4        Ajustar el color i la llum d'una imatge amb degradats, il·luminació, enfocament i desenfocament i filtres.                             T2, T4, T5                                  20 % de CE6

 CE6.5        Fer fotomuntatges i retocs fotogràfics (color d'ulls, dents, arrugues i textura de la pell) amb un resultat natural.                   T3, T4                                      30 % de CE6




                                                                                                                                                                                                     43 de 61
                                                                    Tasca 1: Obrir, guardar i exportar; capes

OBJECTIUS DE LA         Diferenciar el format de treball XCF dels formats d'exportació i triar-los adequadament (pràctica 0).                          APRENENTATGE ACCESSIBLE
TASCA                   Treballar amb capes per a construir una composició (pràctica 1).                                                                 Accessibilitat
                                                                                                                                                             Física
TEMPORALITZACIÓ      1 sessió                                                                                                                                Sensorial
                        Sessió 1: presentació de la SA i organització de la carpeta de pràctiques; pràctica 0 (obrir, guardar i exportar: XCF, PNG i         Cognitiva
                        JPG) i pràctica 1 (capes).                                                                                                           Emocional
                                                                                                                                                         Considera la perspectiva cultural, de gènere i
MESURES DE           METODOLOGIA /       Demostració projectada i pràctica individual.                                                                   socioeconòmica.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                          Considera la connexió amb els desafiaments,
                                                                                                                                                         ODS i afavoreix el rol actiu de l'alumnat.
                     RECURSOS            GIMP; imatges de les pràctiques; web de la matèria; Aules.                                                      Aconsegueix la màxima implicació i
                     MATERIALS,                                                                                                                          participació de tot l'alumnat.
                     PERSONALS I                                                                                                                         Du a terme un seguiment continu
                     ESPACIALS                                                                                                                           proporcionant feedback.
                                                                                                                                                         Presenta la informació a l'alumnat utilitzant
MESURES DE           Targeta de formats; guia de passos amb captures; suport individual; temps ampliat.                                                  diferents formats.
RESPOSTA (III, IV)                                                                                                                                       Afavoreix la reflexió i el processament de la
                                                                                                                                                         informació a diferents nivells.
CODI CRITERIS        CE6.1, CE6.2                                                                                                                        Ofereix a l'alumnat diferents maneres
D'AVALUACIÓ                                                                                                                                              d'expressió del coneixement.




                                                                                                                                                                                                44 de 61
                                                              Tasca 2: Alineació, seleccions, rutes i degradats

OBJECTIUS DE LA         Alinear i distribuir elements amb precisió i aplicar els modes de selecció (pràctiques 2 i 3).                                  APRENENTATGE ACCESSIBLE
TASCA                   Crear el propi nom amb rutes i aplicar-hi degradats (pràctiques 4 i 5).                                                           Accessibilitat
                                                                                                                                                              Física
TEMPORALITZACIÓ      2 sessions                                                                                                                               Sensorial
                        Sessió 2: pràctica 2 (alineació i distribució) i pràctica 3 (modes de selecció).                                                      Cognitiva
                        Sessió 3: pràctica 4 (rutes: el nom amb contorn i farcit) i pràctica 5 (degradats).                                                   Emocional
                                                                                                                                                          Considera la perspectiva cultural, de gènere i
MESURES DE           METODOLOGIA /        Vídeo o demostració i pràctica individual autònoma amb tutoria entre iguals.                                    socioeconòmica.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                           Considera la connexió amb els desafiaments,
                                                                                                                                                          ODS i afavoreix el rol actiu de l'alumnat.
                     RECURSOS             GIMP; imatges de les pràctiques; vídeos de la web de la matèria.                                                Aconsegueix la màxima implicació i
                     MATERIALS,                                                                                                                           participació de tot l'alumnat.
                     PERSONALS I                                                                                                                          Du a terme un seguiment continu
                     ESPACIALS                                                                                                                            proporcionant feedback.
                                                                                                                                                          Presenta la informació a l'alumnat utilitzant
MESURES DE           Menys elements a alinear; rutes sobre una plantilla de lletres; temps ampliat; per a l'alumnat d'altes capacitats, logotip propi     diferents formats.
RESPOSTA (III, IV)   amb rutes.                                                                                                                           Afavoreix la reflexió i el processament de la
                                                                                                                                                          informació a diferents nivells.
CODI CRITERIS        CE6.1, CE6.2, CE6.3, CE6.4                                                                                                           Ofereix a l'alumnat diferents maneres
D'AVALUACIÓ                                                                                                                                               d'expressió del coneixement.




                                                                                                                                                                                                 45 de 61
                                                                         Tasca 3: Fotomuntatge i retoc facial

OBJECTIUS DE LA         Fer un fotomuntatge integrant elements de diverses imatges (pràctica 6).                                                          APRENENTATGE ACCESSIBLE
TASCA                   Canviar el color d'ulls, blanquejar dents i llevar arrugues (pràctiques 7, 8 i 9).                                                  Accessibilitat
                                                                                                                                                                Física
TEMPORALITZACIÓ      2 sessions                                                                                                                                 Sensorial
                        Sessió 4: pràctica 6 (fotomuntatge) i pràctica 7 (canviar color d'ulls).                                                                Cognitiva
                        Sessió 5: pràctica 8 (blanquejar dents) i pràctica 9 (llevar arrugues); breu comentari en gran grup sobre el retoc en                   Emocional
                        publicitat i xarxes socials.                                                                                                        Considera la perspectiva cultural, de gènere i
                                                                                                                                                            socioeconòmica.
MESURES DE           METODOLOGIA /        Demostració i pràctica individual.                                                                                Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                             ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                            Aconsegueix la màxima implicació i
                     RECURSOS             GIMP; imatges de les pràctiques (lliures de drets); exemples d'imatges publicitàries retocades.                   participació de tot l'alumnat.
                     MATERIALS,                                                                                                                             Du a terme un seguiment continu
                     PERSONALS I                                                                                                                            proporcionant feedback.
                     ESPACIALS                                                                                                                              Presenta la informació a l'alumnat utilitzant
                                                                                                                                                            diferents formats.
MESURES DE           Guia visual; selecció de les pràctiques essencials (la resta, com a ampliació); temps ampliat; per a l'alumnat d'altes capacitats,     Afavoreix la reflexió i el processament de la
RESPOSTA (III, IV)   fotomuntatge amb fusió de llum i ombres.                                                                                               informació a diferents nivells.
                                                                                                                                                            Ofereix a l'alumnat diferents maneres
                                                                                                                                                            d'expressió del coneixement.
CODI CRITERIS        CE6.1, CE6.5
D'AVALUACIÓ




                                                                                                                                                                                                   46 de 61
                                                                     Tasca 4: Pell, enfocament i il·luminació

OBJECTIUS DE LA         Canviar la textura de la pell (pràctica 10).                                                        APRENENTATGE ACCESSIBLE
TASCA                   Enfocar i desenfocar zones concretes i corregir la il·luminació (pràctiques 11 i 12).                 Accessibilitat
                                                                                                                                  Física
TEMPORALITZACIÓ      1 sessió                                                                                                     Sensorial
                        Sessió 6: pràctiques 10, 11 i 12.                                                                         Cognitiva
                                                                                                                                  Emocional
MESURES DE           METODOLOGIA /         Treball individual autònom («pregunta a dos companys abans que al professor»).     Considera la perspectiva cultural, de gènere i
RESPOSTA (I, II)     AGRUPAMENT                                                                                               socioeconòmica.
                                                                                                                              Considera la connexió amb els desafiaments,
                                                                                                                              ODS i afavoreix el rol actiu de l'alumnat.
                     RECURSOS              GIMP; imatges de les pràctiques.                                                   Aconsegueix la màxima implicació i
                     MATERIALS,                                                                                               participació de tot l'alumnat.
                     PERSONALS I                                                                                              Du a terme un seguiment continu
                     ESPACIALS                                                                                                proporcionant feedback.
                                                                                                                              Presenta la informació a l'alumnat utilitzant
MESURES DE           Reducció a dues pràctiques; targetes de passos; temps ampliat.                                           diferents formats.
RESPOSTA (III, IV)                                                                                                            Afavoreix la reflexió i el processament de la
                                                                                                                              informació a diferents nivells.
CODI CRITERIS        CE6.1, CE6.4, CE6.5                                                                                      Ofereix a l'alumnat diferents maneres
D'AVALUACIÓ                                                                                                                   d'expressió del coneixement.




                                                                                                                                                                     47 de 61
                                                                                Tasca 5: Color, filtres i fons

OBJECTIUS DE LA         Seleccionar per color per a canviar colors i aplicar filtres bàsics (pràctiques 13 i 14).                               APRENENTATGE ACCESSIBLE
TASCA                   Llevar el fons d'una imatge i exportar-la en PNG amb transparència (pràctica 15).                                         Accessibilitat
                                                                                                                                                      Física
TEMPORALITZACIÓ      1 sessió                                                                                                                         Sensorial
                        Sessió 7: pràctiques 13, 14 i 15.                                                                                             Cognitiva
                                                                                                                                                      Emocional
MESURES DE           METODOLOGIA /         Treball individual autònom amb revisió del professor.                                                  Considera la perspectiva cultural, de gènere i
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                   socioeconòmica.
                                                                                                                                                  Considera la connexió amb els desafiaments,
                                                                                                                                                  ODS i afavoreix el rol actiu de l'alumnat.
                     RECURSOS              GIMP; imatges de les pràctiques.                                                                       Aconsegueix la màxima implicació i
                     MATERIALS,                                                                                                                   participació de tot l'alumnat.
                     PERSONALS I                                                                                                                  Du a terme un seguiment continu
                     ESPACIALS                                                                                                                    proporcionant feedback.
                                                                                                                                                  Presenta la informació a l'alumnat utilitzant
MESURES DE           Reducció a dues pràctiques; targetes de passos; temps ampliat; per a l'alumnat d'altes capacitats, composició pròpia amb     diferents formats.
RESPOSTA (III, IV)   l'element retallat.                                                                                                          Afavoreix la reflexió i el processament de la
                                                                                                                                                  informació a diferents nivells.
CODI CRITERIS        CE6.1, CE6.3, CE6.4                                                                                                          Ofereix a l'alumnat diferents maneres
D'AVALUACIÓ                                                                                                                                       d'expressió del coneixement.




                                                                                                                                                                                         48 de 61
                                                                Tasca 6: Revisió i lliurament de les pràctiques

OBJECTIUS DE LA         Completar les pràctiques pendents i revisar que totes estiguen lliurades en XCF i en el format d'exportació adequat.         APRENENTATGE ACCESSIBLE
TASCA                   Valorar el treball fet i proposar millores (autoavaluació).                                                                    Accessibilitat
                                                                                                                                                           Física
TEMPORALITZACIÓ      1 sessió                                                                                                                              Sensorial
                        Sessió 8: acabament i millora de les pràctiques pendents, revisió de la carpeta i dels lliuraments a Aules i autoavaluació         Cognitiva
                        de la SA.                                                                                                                          Emocional
                                                                                                                                                       Considera la perspectiva cultural, de gènere i
MESURES DE           METODOLOGIA /        Treball individual amb atenció personalitzada.                                                               socioeconòmica.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                        Considera la connexió amb els desafiaments,
                                                                                                                                                       ODS i afavoreix el rol actiu de l'alumnat.
                     RECURSOS             GIMP; Aules; llista de control de les 16 pràctiques.                                                         Aconsegueix la màxima implicació i
                     MATERIALS,                                                                                                                        participació de tot l'alumnat.
                     PERSONALS I                                                                                                                       Du a terme un seguiment continu
                     ESPACIALS                                                                                                                         proporcionant feedback.
                                                                                                                                                       Presenta la informació a l'alumnat utilitzant
MESURES DE           Llista de control reduïda a les pràctiques essencials; suport individual; temps addicional.                                       diferents formats.
RESPOSTA (III, IV)                                                                                                                                     Afavoreix la reflexió i el processament de la
                                                                                                                                                       informació a diferents nivells.
CODI CRITERIS        CE6.1                                                                                                                             Ofereix a l'alumnat diferents maneres
D'AVALUACIÓ                                                                                                                                            d'expressió del coneixement.




                                                                                                                                                                                              49 de 61
5.5. SA5: Entrenant ments artificials: com pensen les màquines

                                                               SA5: Entrenant ments artificials: com pensen les màquines

ÀREA /               IAPR II                            NIVELL                3r ESO                             TEMPORALITZACIÓ           9 sessions (3a avaluació)
MATÈRIA /
ÀMBIT

CONTEXT              ☑ Personal        ☑ Educatiu       ☑ Social      ☑ Professional

DESCRIPCIÓ           Última SA del curs. L'alumnat diferencia les tècniques d'intel·ligència artificial (sistemes experts, xarxes neuronals i aprenentatge automàtic), investiga on s'apliquen i en debat les
                     implicacions ètiques i socials (cotxes autònoms, reconeixement facial, biaixos, el cas del xatbot Tay, canvis en el treball). Després entrena un model de classificació propi i l'usa en
                     un projecte de Scratch, automatitza una tasca quotidiana amb Power Automate i experimenta amb tècniques senzilles de virtualització de la realitat.

REPTE O              «Pots fiar-te d'una IA?» Descobreix com pensen les màquines, entrena'n una, fes que treballe per tu i decideix quan i com l'has de fer servir.
PREGUNTA

PROBLEMA             L'alumnat fa servir assistents, filtres i recomanacions basats en IA cada dia sense saber com funcionen. Accepta les respostes sense contrastar-les, desconeix els biaixos, els
                     problemes de privacitat i els drets d'autoria que comporten, i no sap que moltes tasques repetitives es poden automatitzar.

PRODUCTE             Intermedis: comparació de les tres tècniques de IA, fitxa d'anàlisi d'un cas ètic i flux automatitzat amb Power Automate.
INTERMEDI I/O        Final: model de classificació entrenat i integrat en un projecte de Scratch, i «Decàleg per a fer servir la IA amb criteri».
FINAL

RELACIÓ AMB          Repte del s. XXI: aprofitament crític, ètic i responsable de la cultura digital; comprendre les tecnologies emergents per a participar-hi com a ciutadania informada.
ELS REPTES           ODS 10: Reducció de les desigualtats i ODS 8: Treball decent i creixement econòmic: l'alumnat detecta com els biaixos de les dades poden discriminar persones i
DEL S. XXI I         reflexiona sobre com l'automatització canvia el treball.
ELS ODS

CCL: Competència en comunicació lingüística CP: Competència plurilingüe STEM: Competència matemàtica i competència en ciència, tecnologia i enginyeria CD: Competència digital
CPSAA: Competència personal, social i d'aprendre a aprendre CC: Competència ciutadana CCEC: Competència en consciència i expressió cultural CE: Competència emprenedora




                                                                                                                                                                                                      50 de 61
                                                               SA5: Entrenant ments artificials: com pensen les màquines

COMPETÈNCIES          CCL,             COMPETÈNCIES          Competència específica del currículum: CE1. Identificar, investigar i emprar tècniques                              CRITERIS      CE1: CE1.1, CE1.2, CE1.3,
CLAU                  CP,              ESPECÍFIQUES          d'intel·ligència artificial i virtualització de la realitat en l'abordatge i la cerca de solucions a                D'AVALUACIÓ   CE1.4, CE1.5
                      STEM,                                  problemes bàsics de la societat valorant els principis ètics i inclusius aplicats.                                                CE4: CE4.2, CE4.3
                      CD,                                    Competència específica del currículum: CE4. Afrontar reptes tecnològics senzills i
                      CPSAA,                                 proposar solucions mitjançant la programació, la intel·ligència artificial i la robòtica, analitzant
                      CC,                                    les possibilitats i valorant críticament les implicacions ètiques i ecosocials.
                      CE

SABERS                     Sensors, tipologia i aplicacions.
BÀSICS I                   Tècniques inicials de IA: sistemes experts, xarxes neuronals i aprenentatge automàtic.
ALTRES                     Processament automàtic de la informació. Automatització de processos: disparadors, accions i connectors (Power Automate).
SABERS                     Equitat i inclusió en sistemes de IA. Biaixos en IA.
                           Implicacions socials i ètiques de la intel·ligència artificial.
                           Tècniques de virtualització de la realitat.
                           Història de la IA i camps d'aplicació.
                           IA generativa: instruccions (prompts), verificació de resultats, privacitat i drets d'autoria.

CCL: Competència en comunicació lingüística CP: Competència plurilingüe STEM: Competència matemàtica i competència en ciència, tecnologia i enginyeria CD: Competència digital
CPSAA: Competència personal, social i d'aprendre a aprendre CC: Competència ciutadana CCEC: Competència en consciència i expressió cultural CE: Competència emprenedora




                                                                                                                                                                                                                  51 de 61
                                                                                              SA5: criteris d'avaluació


Criteris d'avaluació que es treballen en aquesta situació d'aprenentatge, tasques on es recullen les evidències i pes de cada criteri dins de la seua competència específica. La situació d'aprenentatge és el
context on s'avaluen els criteris: la nota de cada criteri passa a la seua CE i les CE donen la nota de l'avaluació i la final (apartat 6). Per això la SA no té una nota pròpia i aquests pesos no han de sumar
100 % dins de la SA.

 Criteri      Descripció                                                                                                                                Tasques                                 Pes en la CE

 CE1.1        Identificar el funcionament de tècniques de IA.                                                                                           T1, T3                                   20 % de CE1

 CE1.2        Investigar situacions on s'apliquen tècniques de IA.                                                                                      T1, T2                                   20 % de CE1

 CE1.3        Valorar criteris ètics aplicats a les funcions de IA.                                                                                     T2, T3, T5                               20 % de CE1

 CE1.4        Emprar funcions de IA en aplicacions senzilles seguint criteris ètics i inclusius per a buscar solucions a problemes bàsics.              T3, T4                                   25 % de CE1

 CE1.5        Emprar tècniques senzilles de virtualització de la realitat.                                                                              T5                                       15 % de CE1

 CE4.2        Valorar la importància de la intel·ligència artificial, la programació i la robòtica com a elements disruptors de la transformació        T2, T4                                   20 % de CE4
              social, cultural i científica actuals.

 CE4.3        Dissenyar solucions utilitzant la programació, la intel·ligència artificial i la robòtica triant l'opció que millor s'adapte als reptes   T4 (també en SA2, SA3)                   25 % de CE4
              plantejats.




                                                                                                                                                                                                     52 de 61
                                                                       Tasca 1: Com pensen les màquines

OBJECTIUS DE LA         Conéixer els fets més rellevants de la història de la IA i els seus camps d'aplicació.                                    APRENENTATGE ACCESSIBLE
TASCA                   Diferenciar sistemes experts, xarxes neuronals i aprenentatge automàtic, i comparar-los (P01-P01.3).                        Accessibilitat
                                                                                                                                                        Física
TEMPORALITZACIÓ      2 sessions                                                                                                                         Sensorial
                        Sessió 1: presentació del bloc amb un vídeo sobre IA; història de la IA; P01 (sistemes experts en la vida real).                Cognitiva
                        Sessió 2: P01.1 (xarxes neuronals), P01.2 (aprenentatge automàtic: dades, algorisme i predicció) i P01.3 (comparació de         Emocional
                        les tres tècniques).                                                                                                        Considera la perspectiva cultural, de gènere i
                                                                                                                                                    socioeconòmica.
MESURES DE           METODOLOGIA /       Exposició dialogada amb vídeos i activitats individuals, amb consulta per parelles.                        Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                     ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                    Aconsegueix la màxima implicació i
                     RECURSOS            Aula d'informàtica amb projector; apunts i presentacions a Aules; vídeos; Kahoot.                          participació de tot l'alumnat.
                     MATERIALS,                                                                                                                     Du a terme un seguiment continu
                     PERSONALS I                                                                                                                    proporcionant feedback.
                     ESPACIALS                                                                                                                      Presenta la informació a l'alumnat utilitzant
                                                                                                                                                    diferents formats.
MESURES DE           Glossari visual; taula comparativa parcialment omplida; temps addicional; per a l'alumnat d'altes capacitats, cerca d'una      Afavoreix la reflexió i el processament de la
RESPOSTA (III, IV)   quarta tècnica.                                                                                                                informació a diferents nivells.
                                                                                                                                                    Ofereix a l'alumnat diferents maneres
                                                                                                                                                    d'expressió del coneixement.
CODI CRITERIS        CE1.1, CE1.2
D'AVALUACIÓ




                                                                                                                                                                                           53 de 61
                                                              Tasca 2: IA i societat: ètica, biaixos i IA generativa

OBJECTIUS DE LA         Investigar situacions reals on s'aplica la IA i analitzar-ne les implicacions socials i ètiques, detectant biaixos.                  APRENENTATGE ACCESSIBLE
TASCA                   Crear continguts amb IA generativa verificant-ne el resultat, cuidant la privacitat i citant l'eina, i valorar la IA com a             Accessibilitat
                        element disruptor del treball i la societat.                                                                                               Física
                                                                                                                                                                   Sensorial
TEMPORALITZACIÓ      2 sessions                                                                                                                                    Cognitiva
                        Sessió 3: P02 (dilemes ètics dels cotxes autònoms), P03 (reconeixement facial), P04 (biaixos) i P05 (el cas del xatbot Tay);               Emocional
                        debat amb rols.                                                                                                                        Considera la perspectiva cultural, de gènere i
                        Sessió 4: P07 (canvis en el treball) i creació amb IA generativa autoritzada pel centre (o demostració del professor):                 socioeconòmica.
                                                                                                                                                               Considera la connexió amb els desafiaments,
                        imatges, vídeo o música (P09, P11, P12), anàlisi crítica dels resultats, privacitat i drets d'autoria.
                                                                                                                                                               ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                               Aconsegueix la màxima implicació i
MESURES DE           METODOLOGIA /         Treball en grups petits, debat en gran grup amb rols assignats i treball individual.
                                                                                                                                                               participació de tot l'alumnat.
RESPOSTA (I, II)     AGRUPAMENT
                                                                                                                                                               Du a terme un seguiment continu
                                                                                                                                                               proporcionant feedback.
                     RECURSOS              Vídeos i articles seleccionats; fitxa d'anàlisi de casos; eines d'IA generativa autoritzades; rúbrica de debat.
                                                                                                                                                               Presenta la informació a l'alumnat utilitzant
                     MATERIALS,
                                                                                                                                                               diferents formats.
                     PERSONALS I
                                                                                                                                                               Afavoreix la reflexió i el processament de la
                     ESPACIALS
                                                                                                                                                               informació a diferents nivells.
                                                                                                                                                               Ofereix a l'alumnat diferents maneres
MESURES DE           Casos amb preguntes guia; participació en el debat per escrit o en àudio; exemples ja generats en lloc de generar-los; temps
                                                                                                                                                               d'expressió del coneixement.
RESPOSTA (III, IV)   addicional.

CODI CRITERIS        CE1.2, CE1.3, CE4.2
D'AVALUACIÓ




                                                                                                                                                                                                      54 de 61
                                                                                Tasca 3: Entrenem una IA

OBJECTIUS DE LA         Entrenar un model de classificació (de text o d'imatges) amb dades pròpies i comprovar com afecten els resultats.         APRENENTATGE ACCESSIBLE
TASCA                   Fer servir el model en un projecte senzill de Scratch que resolga un problema bàsic (P14 i P14.1).                          Accessibilitat
                                                                                                                                                        Física
TEMPORALITZACIÓ      2 sessions                                                                                                                         Sensorial
                        Sessió 5: P14 (modelatge d'una IA de classificació textual amb Machine Learning for Kids o Teachable Machine): classes,         Cognitiva
                        exemples, entrenament i prova; detecció de biaixos per falta de dades.                                                          Emocional
                        Sessió 6: P14.1 (ús del model en un projecte de Scratch) i proves amb companys.                                             Considera la perspectiva cultural, de gènere i
                                                                                                                                                    socioeconòmica.
MESURES DE           METODOLOGIA /         Demostració i treball individual amb consulta per parelles.                                              Considera la connexió amb els desafiaments,
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                     ODS i afavoreix el rol actiu de l'alumnat.
                                                                                                                                                    Aconsegueix la màxima implicació i
                     RECURSOS              Machine Learning for Kids o Teachable Machine; Scratch; fitxa de l'experiment.                           participació de tot l'alumnat.
                     MATERIALS,                                                                                                                     Du a terme un seguiment continu
                     PERSONALS I                                                                                                                    proporcionant feedback.
                     ESPACIALS                                                                                                                      Presenta la informació a l'alumnat utilitzant
                                                                                                                                                    diferents formats.
MESURES DE           Dues classes només; projecte de Scratch de base; guia amb captures; per a l'alumnat d'altes capacitats, model amb més          Afavoreix la reflexió i el processament de la
RESPOSTA (III, IV)   classes i mesura de l'encert.                                                                                                  informació a diferents nivells.
                                                                                                                                                    Ofereix a l'alumnat diferents maneres
                                                                                                                                                    d'expressió del coneixement.
CODI CRITERIS        CE1.1, CE1.3, CE1.4
D'AVALUACIÓ




                                                                                                                                                                                           55 de 61
                                                           Tasca 4: Automatitzem tasques amb Power Automate

OBJECTIUS DE LA         Entendre què és l'automatització de processos i identificar-ne els elements: disparador, accions i connectors.                       APRENENTATGE ACCESSIBLE
TASCA                   Dissenyar i provar un flux que automatitze una tasca quotidiana del centre, valorant on aporta la IA i on cal supervisió               Accessibilitat
                        humana.                                                                                                                                    Física
                                                                                                                                                                   Sensorial
TEMPORALITZACIÓ      2 sessions                                                                                                                                    Cognitiva
                        Sessió 7: què és automatitzar i exemples del món laboral; recorregut per Power Automate amb el compte educatiu; flux                       Emocional
                        guiat: resposta d'un formulari de Microsoft Forms → correu de confirmació i fila nova en un full d'Excel.                              Considera la perspectiva cultural, de gènere i
                        Sessió 8: flux propi per a un problema proper (recordatori de lliuraments, inscripció a una activitat, recollida                       socioeconòmica.
                                                                                                                                                               Considera la connexió amb els desafiaments,
                        d'incidències), creat a partir d'una plantilla o, si el compte ho permet, descrivint-lo en llenguatge natural a l'assistent de IA;
                                                                                                                                                               ODS i afavoreix el rol actiu de l'alumnat.
                        proves, correcció d'errors i reflexió sobre els llocs de treball que canvien.
                                                                                                                                                               Aconsegueix la màxima implicació i
                                                                                                                                                               participació de tot l'alumnat.
MESURES DE           METODOLOGIA /         Demostració projectada, treball en parella amb diagrama del flux abans de construir-lo i posada en comú.
                                                                                                                                                               Du a terme un seguiment continu
RESPOSTA (I, II)     AGRUPAMENT
                                                                                                                                                               proporcionant feedback.
                                                                                                                                                               Presenta la informació a l'alumnat utilitzant
                     RECURSOS              Power Automate, Microsoft Forms i Excel en línia (compte educatiu de Microsoft 365); fitxa de disseny del
                                                                                                                                                               diferents formats.
                     MATERIALS,            flux; rúbrica.
                                                                                                                                                               Afavoreix la reflexió i el processament de la
                     PERSONALS I
                                                                                                                                                               informació a diferents nivells.
                     ESPACIALS
                                                                                                                                                               Ofereix a l'alumnat diferents maneres
                                                                                                                                                               d'expressió del coneixement.
MESURES DE           Flux de mostra ja creat per a modificar-lo; targeta amb els passos; demostració projectada si el compte de l'alumne no té
RESPOSTA (III, IV)   Power Automate habilitat; per a l'alumnat d'altes capacitats, condicions i diverses accions en el mateix flux.

CODI CRITERIS        CE1.4, CE4.2, CE4.3
D'AVALUACIÓ




                                                                                                                                                                                                      56 de 61
                                                                Tasca 5: Virtualitzem la realitat i decàleg final

OBJECTIUS DE LA         Experimentar amb tècniques senzilles de virtualització de la realitat (realitat virtual, augmentada o vídeo 360°).             APRENENTATGE ACCESSIBLE
TASCA                   Elaborar el «Decàleg per a fer servir la IA amb criteri» a partir del que s'ha aprés en la SA.                                   Accessibilitat
                                                                                                                                                             Física
TEMPORALITZACIÓ      1 sessió                                                                                                                                Sensorial
                        Sessió 9: experimentació amb RV/RA i creació d'una escena senzilla; redacció del decàleg, autoavaluació i coavaluació de             Cognitiva
                        la SA.                                                                                                                               Emocional
                                                                                                                                                         Considera la perspectiva cultural, de gènere i
MESURES DE           METODOLOGIA /       Treball individual i en parella; tancament en gran grup.                                                        socioeconòmica.
RESPOSTA (I, II)     AGRUPAMENT                                                                                                                          Considera la connexió amb els desafiaments,
                                                                                                                                                         ODS i afavoreix el rol actiu de l'alumnat.
                     RECURSOS            Eina de creació d'escenes 3D/RA o vídeo 360°; mòbils o tauletes si n'hi ha; plantilla del decàleg; rúbrica.     Aconsegueix la màxima implicació i
                     MATERIALS,                                                                                                                          participació de tot l'alumnat.
                     PERSONALS I                                                                                                                         Du a terme un seguiment continu
                     ESPACIALS                                                                                                                           proporcionant feedback.
                                                                                                                                                         Presenta la informació a l'alumnat utilitzant
MESURES DE           Plantilla d'escena començada; alternativa sense visor per a alumnat amb sensibilitat al mareig; frases inicials per al decàleg.     diferents formats.
RESPOSTA (III, IV)                                                                                                                                       Afavoreix la reflexió i el processament de la
                                                                                                                                                         informació a diferents nivells.
CODI CRITERIS        CE1.3, CE1.5                                                                                                                        Ofereix a l'alumnat diferents maneres
D'AVALUACIÓ                                                                                                                                              d'expressió del coneixement.




                                                                                                                                                                                                57 de 61
6. Criteris de qualificació

La nota final de l'assignatura s'obté a partir de la nota de cada competència específica, amb els pesos següents:

 Competència       Descripció                                                                                                                                         Tipus                      Pes

 CE1               Identificar, investigar i emprar tècniques d'intel·ligència artificial i virtualització de la realitat en l'abordatge i la cerca de solucions a    Currículum                15 %
                   problemes bàsics de la societat valorant els principis ètics i inclusius aplicats.

 CE2               Aplicar el pensament computacional en l'anàlisi i resolució de problemes bàsics significatius per a l'alumnat mitjançant el desenvolupament        Currículum                20 %
                   de programari.

 CE3               Muntar sistemes robòtics senzills, analitzant les respostes que proporcionen en la seua interacció amb l'entorn i valorant l'eficàcia d'aquestes   Currículum                20 %
                   davant dels reptes plantejats.

 CE4               Afrontar reptes tecnològics senzills i proposar solucions mitjançant la programació, la intel·ligència artificial i la robòtica, analitzant les    Currículum                10 %
                   possibilitats i valorant críticament les implicacions ètiques i ecosocials.

 CE5               Planificar i produir una narració multimèdia (còmic animat i sonoritzat), des del guió fins al muntatge audiovisual, combinant imatge, text,       Ampliació del             25 %
                   àudio i vídeo per a comunicar un missatge de manera creativa, respectant els drets d'autoria i valorant el resultat.                               departament (Projecte
                                                                                                                                                                      Còmic)

 CE6               Editar i compondre imatges digitals amb un programa d'edició de mapes de bits, aplicant tècniques de capes, selecció, rutes, ajustos, retoc i      Ampliació del             10 %
                   fotomuntatge, i conservant i exportant el treball en el format adequat.                                                                            departament (GIMP
                                                                                                                                                                      avançat)

 Total                                                                                                                                                                                         100 %



  Les competències del currículum (CE1-CE4) representen el 65 % de la nota final i les d'ampliació del departament (CE5 Projecte Còmic i CE6 GIMP avançat), el 35 %.




                                                                                                                                                                                              58 de 61
Competències específiques del currículum

CE1
 Criteri   Descripció                                                                                                                          SA    Pes en la CE

 CE1.1     Identificar el funcionament de tècniques de IA.                                                                                     SA5          20 %

 CE1.2     Investigar situacions on s'apliquen tècniques de IA.                                                                                SA5          20 %

 CE1.3     Valorar criteris ètics aplicats a les funcions de IA.                                                                               SA5          20 %

 CE1.4     Emprar funcions de IA en aplicacions senzilles seguint criteris ètics i inclusius per a buscar solucions a problemes bàsics.        SA5          25 %

 CE1.5     Emprar tècniques senzilles de virtualització de la realitat.                                                                        SA5          15 %

 Total                                                                                                                                                    100 %



CE2
 Criteri   Descripció                                                                                                                          SA    Pes en la CE

 CE2.1     Analitzar problemes bàsics significatius per a l'alumnat, mitjançant l'ús de les estructures de control més adequades.              SA2          20 %

 CE2.2     Avaluar i mantindre les aplicacions informàtiques desenvolupades pel mateix alumnat.                                                SA2          15 %

 CE2.3     Planificar de manera autònoma la solució de problemes bàsics, utilitzant els algorismes i les estructures de dades més adequades.   SA2          20 %

 CE2.4     Programar aplicacions senzilles multiplataforma de manera autònoma per a resoldre problemes bàsics.                                 SA2          35 %

 CE2.5     Aplicar i respectar els drets d'autoria, llicències de drets i explotació durant la creació de programari.                          SA2          10 %

 Total                                                                                                                                                    100 %




                                                                                                                                                         59 de 61
CE3
Criteri   Descripció                                                                                                                                                  SA              Pes en la CE

CE3.1     Muntar robots de major complexitat emprant sensors, actuadors i altres operadors.                                                                           SA3                    20 %

CE3.2     Connectar, transferir i validar l'execució del programa de control seleccionat al robot.                                                                    SA3                    15 %

CE3.3     Seleccionar els mòduls d'entrada i eixida per a muntar robots senzills, que siguen capaços de fer tasques de manera autònoma.                               SA3                    15 %

CE3.4     Analitzar i avaluar l'eficàcia de la interacció del robot amb l'entorn.                                                                                     SA3                    15 %

CE3.5     Programar instruccions senzilles multiplataforma de manera autònoma per a controlar un robot programable.                                                   SA3                    20 %

CE3.6     Controlar el robot per part de l'usuari en temps real i de manera remota.                                                                                   SA3                    15 %

Total                                                                                                                                                                                      100 %



CE4
Criteri   Descripció                                                                                                                                                  SA              Pes en la CE

CE4.1     Planificar tasques senzilles, crear estructures d'equips de treball, distribuir funcions i responsabilitats de les persones integrants i col·laborar        SA3                    20 %
          proactivament en el desenvolupament de solucions digitals i tecnològiques.

CE4.2     Valorar la importància de la intel·ligència artificial, la programació i la robòtica com a elements disruptors de la transformació social, cultural i       SA5                    20 %
          científica actuals.

CE4.3     Dissenyar solucions utilitzant la programació, la intel·ligència artificial i la robòtica triant l'opció que millor s'adapte als reptes plantejats.         SA2, SA3, SA5          25 %

CE4.4     Gestionar situacions d'incertesa en entorns digitals i tecnològics amb una actitud positiva, i afrontar-les utilitzant el coneixement adquirit i sentint-   SA2, SA3               15 %
          se competent.

CE4.5     Aplicar la sostenibilitat i inclusió com a requisits del disseny de solucions tecnològiques.                                                                SA3                    20 %

Total                                                                                                                                                                                      100 %




                                                                                                                                                                                          60 de 61
Competències específiques d'ampliació del departament

CE5 — Projecte Còmic
 Criteri     Descripció                                                                                                                                                    SA       Pes en la CE

 CE5.1       Planificar la producció mitjançant un guió multimèdia que descriga, per a cada vinyeta, l'escena, els personatges, el text i el so, coherent amb el           SA1              15 %
             missatge i l'ODS triat.

 CE5.2       Crear les vinyetes aplicant els elements del llenguatge del còmic (escenes, plans, personatges, bafarades i cartutxos) amb una seqüència narrativa            SA1              20 %
             comprensible.

 CE5.3       Gravar i editar àudio digital (nivells, reducció de soroll, normalització, pistes, esvaïments i efectes) i exportar-lo en el format adequat.                  SA1              20 %

 CE5.4       Muntar vídeo amb un editor no lineal sincronitzant imatge i so, amb introducció, transicions i crèdits, i exportar-lo amb els paràmetres adequats.            SA1              25 %

 CE5.5       Organitzar els recursos del projecte (carpetes, noms d'arxiu, formats de treball i d'exportació) i utilitzar recursos lliures de drets citant-ne l'autoria.   SA1              10 %

 CE5.6       Presentar el producte final, valorar-ne el resultat i proposar millores a partir de l'autoavaluació i la coavaluació.                                         SA1              10 %

 Total                                                                                                                                                                                    100 %



CE6 — GIMP avançat
 Criteri     Descripció                                                                                                                                                    SA       Pes en la CE

 CE6.1       Guardar els projectes en XCF, exportar les imatges en PNG o JPG segons la finalitat i organitzar els arxius originals i els treballs realitzats.              SA4              10 %

 CE6.2       Compondre imatges amb capes, alineant i distribuint els elements amb precisió.                                                                                SA4              15 %

 CE6.3       Seleccionar i aïllar elements amb els modes de selecció, les rutes i la selecció per color, i llevar el fons d'una imatge.                                    SA4              25 %

 CE6.4       Ajustar el color i la llum d'una imatge amb degradats, il·luminació, enfocament i desenfocament i filtres.                                                    SA4              20 %

 CE6.5       Fer fotomuntatges i retocs fotogràfics (color d'ulls, dents, arrugues i textura de la pell) amb un resultat natural.                                          SA4              30 %

 Total                                                                                                                                                                                    100 %


Càlcul de la nota. Nota de la CE = Σ (nota del criteri × pes del criteri en la CE). Nota final = Σ (nota de la CE × pes de la CE): CE1 × 15 % + CE2 × 20 % + CE3 × 20 % + CE4 × 10 % + CE5 × 25 % +
CE6 × 10 %.




                                                                                                                                                                                         61 de 61
```
