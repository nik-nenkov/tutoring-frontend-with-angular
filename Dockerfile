FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY /dist /usr/share/nginx/html
COPY config/mime.types /etc/nginx/mime.types
COPY config/nginx.conf /etc/nginx/nginx.conf
