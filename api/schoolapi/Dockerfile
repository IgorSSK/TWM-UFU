FROM node:latest

WORKDIR /usr/app

ADD .env /app

EXPOSE ${PORT}

ADD package*.json ./

RUN npm install

COPY . .


CMD ['npm', 'start']
