# build
FROM registry.redhat.io/ubi8/nodejs-10 as build
COPY . /tmp/src/
# compile using the s2i assemble script
RUN ls -la /tmp/src/ && $STI_SCRIPTS_PATH/assemble

# runtime
FROM registry.redhat.io/rhel8/nginx-116
COPY --from=build /opt/app-root/src/build /tmp/src
RUN $STI_SCRIPTS_PATH/assemble
CMD $STI_SCRIPTS_PATH/run

