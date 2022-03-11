#! /bin/bash

docker stop mixed-signals-site

docker run -d -p 9090:80 mixed-signals-site