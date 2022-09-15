FROM node:14-alpine

# Create server directory
WORKDIR /homecloud-backend

# Install app dependencies
COPY package.json ./

RUN npm install

COPY . .
EXPOSE 9000
CMD ["nodemon", "server.js"]