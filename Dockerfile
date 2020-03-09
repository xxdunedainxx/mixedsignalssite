# Docker commands
# docker run -ti --entrypoint /bin/sh band-site
# docker build .
# 

# Load ubuntu
FROM ubuntu:latest

# copy context over
COPY . ./mixedsignals

WORKDIR ./mixedsignals/mixedsignals/setup/scripts

RUN sed -i 's/\r//g' ./setup.sh

RUN bash ./setup.sh