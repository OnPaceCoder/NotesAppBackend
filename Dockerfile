FROM node:18-alpine

WORKDIR /usr/src/app

COPY  package.json package-lock.json ./

RUN npm install 

COPY  . /usr/src/app/

EXPOSE 5000

CMD [ "npm", "run" , "start" ]