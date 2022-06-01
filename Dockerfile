FROM node:13.12.0-alpine
WORKDIR /app
COPY mon-app/. ./
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH
CMD npm start
