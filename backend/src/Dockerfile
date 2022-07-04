FROM node:16-alpine

WORKDIR /app/backend

COPY . ./app/backend

RUN npm install

COPY . ./app/backend

CMD [ "npm", "run", "debug" ]