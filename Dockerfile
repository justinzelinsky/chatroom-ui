FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 8082
EXPOSE 8083

CMD [ "node", "index.js" ]