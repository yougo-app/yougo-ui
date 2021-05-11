FROM registry.access.redhat.com/ubi8/nodejs-14 as build

# Install dependencies
# Layers are cached if package.json & package-lock.json unchanged
COPY package*.json ./
RUN npm ci

# Copy application sources
COPY . .

# Build application
RUN npm run build


FROM registry.access.redhat.com/ubi8/nginx-118

# Add application sources to a directory that the assemble script expects them
# and set permissions so that the container runs without root access
USER 0
COPY --from=build /opt/app-root/src/build /tmp/src
RUN chown -R 1001:0 /tmp/src
USER 1001

# Let the assemble script to install the dependencies
RUN $STI_SCRIPTS_PATH/assemble

# Run script uses standard ways to run the application
CMD $STI_SCRIPTS_PATH/run
