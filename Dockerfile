FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY /dist /usr/share/nginx/html
COPY config/lab.epam.com.crt /var/certificates/bike.lab.epam.com.crt
COPY config/lab.epam.com.key /var/certificates/bike.lab.epam.com.key
COPY config/mime.types /etc/nginx/mime.types
COPY config/nginx.conf /etc/nginx/nginx.conf
