FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY /dist /usr/share/nginx/html
COPY lab.epam.com.crt /var/certificates/bike.lab.epam.com.crt
COPY lab.epam.com.key /var/certificates/bike.lab.epam.com.key
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
