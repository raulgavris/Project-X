FROM node:12.17-alpine as build

WORKDIR /frontend

COPY . /frontend/

RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm run build

FROM nginx:1.19.1-alpine
COPY --from=build /frontend/build /var/www/website
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

COPY entrypoint-frontend.sh /usr/local/bin 

EXPOSE 80
EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/entrypoint-frontend.sh"]
