FROM node:18

WORKDIR /app

COPY package*.json ./

# Debug: voir le contenu du dossier /app
RUN ls -l /app
RUN cat package.json

RUN npm install

COPY . .
COPY .env .

CMD ["node", "index.js"]
