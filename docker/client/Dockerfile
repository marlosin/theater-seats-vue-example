FROM node:alpine

RUN echo "$(node -v)"
RUN apk update
RUN apk add git 

RUN mkdir -p /tmp/client
COPY ./client/package.json ./client/yarn.lock /tmp/client/
RUN cd /tmp/client && yarn --pure-lockfile --no-cache
RUN mkdir -p /usr/src/client && cp -a /tmp/client/node_modules /usr/src/client

EXPOSE 8080

WORKDIR /usr/src/client

CMD ["yarn", "run", "serve"]