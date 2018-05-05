FROM node:8.11.1-alpine

# Preparing working environment.
RUN mkdir -p /usr/src/openhome-backend
WORKDIR /usr/src/openhome-backend

# Installing all dependencies.
COPY package*.json /usr/src/openhome-backend/
RUN npm install

# Copying openhome-backend source into image.
COPY . /usr/src/openhome-backend

# Building app
RUN npm run build
WORKDIR /usr/src/openhome-backend/dist

# Exposing ports.
EXPOSE 8080 3000 3001 3002

# Setting entrypoint container CMD.
CMD [ "node", "openhome-service.js"]