# Fem servir una imatge molt lleugera de Nginx
FROM nginx:alpine

# Copiem tots els fitxers de la carpeta actual (el teu html/css/js)
# a la carpeta on Nginx serveix les pàgines web per defecte
# Copiem tots els fitxers de la carpeta actual (el teu html/css/js)
# a la carpeta on Nginx serveix les pàgines web per defecte
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposem el port 80 (intern del contenidor)
EXPOSE 80
