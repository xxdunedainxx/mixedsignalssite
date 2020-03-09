#!/bin/bash

echo "begin install scripts"

apt-get update

libs=("nginx" "vim" "net-tools" "curl")

for lib in "${libs[@]}"
  do
    apt-get install $lib --assume-yes true
  done