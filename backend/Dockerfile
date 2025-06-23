FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install -g snyk

COPY . .
COPY .env .

RUN snyk test

CMD ["node", "index.js"]
