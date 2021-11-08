FROM node:16-slim
RUN apt-get update
RUN apt-get install -y openssl
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE $PORT
CMD ["npm", "run", "devStart"]