FROM node:alpine

RUN mkdir -p /tmp/api
COPY ./api/package.json ./api/yarn.lock /tmp/api/
RUN cd /tmp/api && yarn --pure-lockfile --no-cache
RUN mkdir -p /usr/src/api && cp -a /tmp/api/node_modules /usr/src/api

WORKDIR /usr/src/api

EXPOSE 3000

CMD ["yarn", "run", "serve"]
