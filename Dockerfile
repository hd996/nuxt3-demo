FROM node:14-alpine

LABEL maintainer="hd"
LABEL description="Nuxt3 Demo"

ARG NODE_ENV

ENV HOST 0.0.0.0
ENV NODE_ENV ${NODE_ENV}

WORKDIR /nuxt3-demo

RUN yarn config set registry https://registry.npm.taobao.org

COPY package.json yarn.lock ./
COPY config/ ./config
COPY ./.output ./.output

RUN yarn install --prefer-offline --frozen-lockfile --ignore-engines --production

EXPOSE 3000

ENTRYPOINT ["yarn" ,"start"]
