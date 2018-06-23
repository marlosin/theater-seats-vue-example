FROM node:alpine

RUN echo "$(node -v)"
RUN apk update
RUN apk add git 

RUN mkdir -p /tmp/client
COPY ./client/package.json ./client/yarn.lock /tmp/client/
RUN cd /tmp/client && yarn --pure-lockfile --no-cache
RUN mkdir -p /usr/src/client && cp -a /tmp/client/node_modules /usr/src/client

# Install chromium
RUN apk -U --no-cache \
    --allow-untrusted add \
    zlib-dev \
    chromium \
    xvfb \
    wait4ports \
    xorg-server \
    dbus \
    ttf-freefont \
    grep \ 
    udev \
    && apk del --purge --force linux-headers binutils-gold gnupg zlib-dev libc-utils \
    && rm -rf /var/lib/apt/lists/* \
    /var/cache/apk/* \
    /usr/share/man \
    /tmp/* \
    /usr/lib/node_modules/npm/man \
    /usr/lib/node_modules/npm/doc \
    /usr/lib/node_modules/npm/html \
    /usr/lib/node_modules/npm/scripts

# Add Chrome as a user
RUN adduser -D -u 666 chrome \
    && chown -R chrome:chrome /usr/src/client
# Run Chrome non-privileged

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/

EXPOSE 8080

WORKDIR /usr/src/client

CMD ["yarn", "run", "serve"]

# Autorun chrome headless with no GPU
# USER chrome
# ENTRYPOINT ["chromium-browser", "--headless", "--disable-gpu", "--disable-software-rasterizer"]