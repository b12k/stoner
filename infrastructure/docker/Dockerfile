FROM node:lts-alpine AS base
RUN apk update
WORKDIR /app
ARG NAME
ENV NAME=${NAME}
ENV YARN_CACHE_FOLDER=.yarn-cache

FROM base AS pruner
RUN yarn global add turbo@1.1.2
COPY ./apps ./apps
COPY ./libs ./libs
COPY ./configs ./configs
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./turbo.json ./turbo.json
RUN turbo prune --scope=@${NAME} --docker

FROM base AS dev-deps
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
RUN yarn install --frozen-lockfile --ignore-scripts

FROM base AS prod-deps
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
COPY --from=dev-deps /app/${YARN_CACHE_FOLDER} /${YARN_CACHE_FOLDER} 
RUN yarn install --frozen-lockfile --production --prefer-offline --ignore-scripts
RUN rm -rf /app/${YARN_CACHE_FOLDER}

FROM base AS builder
COPY --from=dev-deps /app/ .
COPY --from=pruner /app/out/full/ .
RUN yarn turbo run build --scope=@${NAME} --include-dependencies --no-deps
RUN find . -name node_modules | xargs rm -rf

FROM base AS runner
COPY --from=prod-deps /app/ .
COPY --from=builder /app/ .
CMD yarn workspace @${NAME} start
