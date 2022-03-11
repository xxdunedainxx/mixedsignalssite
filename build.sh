#! /bin/bash

HOME=$(pwd)

cd mixedsignals_ui

rm -rf docker/tmp
mkdir docker/tmp

./scripts/build.sh

cd $HOME

cp -r mixedsignals_ui/build/ docker/tmp

cd docker 
docker build . -f Dockerfile -t mixed-signals-site --no-cache

cd $HOME 