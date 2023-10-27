FROM node:20.9.0-alpine3.18

WORKDIR /todo-api/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8010

CMD [ "node", "app.js" ]
