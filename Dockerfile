FROM node:14.15-alpine

WORKDIR /usr/src/tb_game

COPY . /usr/src/tb_game

RUN npm install --silent
