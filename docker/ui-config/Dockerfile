# Stage 1 - the build process
FROM node:10.9 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn

# so far, the above should be indentical layers to ui/Dockerfile build-deps
# the rest will be custom to get the build-env script running
RUN mkdir -p /config public/config
VOLUME /config
COPY scripts ./scripts
COPY docker/ui-config/entrypoint.sh ./
ENTRYPOINT ./entrypoint.sh
