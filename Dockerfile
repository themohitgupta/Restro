FROM node:16 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3300

EXPOSE 3300

CMD [ "npm", "start", "npm", "run developement --watch" ]