FROM node:13.12.0-alpine

COPY . /frontend
WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

RUN npm install
#--silent
RUN npm install react-scripts@3.4.1 -g

RUN npm run-script build
RUN npm install -g serve
