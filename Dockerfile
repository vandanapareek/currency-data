# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app

ARG API_KEY=ZhL6CeSEvYJ4KmjUjrQO3drhCCfSOqhg
ENV VUE_APP_API_KEY=$API_KEY

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 80
CMD ["npm", "run", "serve"]