FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .
EXPOSE 5000
CMD ["npm", "start"]