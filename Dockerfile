FROM node:12-alpine

RUN npm install --global http-server

WORKDIR /app

COPY ./public .

CMD ["http-server", ".", "-p 80"]

EXPOSE 8080