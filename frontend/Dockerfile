# Étape 1 : build de l'app React
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run lint
RUN npm run build

# Étape 2 : serveur Nginx pour servir l'app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
