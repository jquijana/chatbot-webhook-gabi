FROM node:alpine3.17
EXPOSE 8080 443
RUN mkdir -p /service/src
WORKDIR /service
COPY src /service/src
COPY package.json /service
RUN npm install --production
CMD [ "npm", "run", "start" ]