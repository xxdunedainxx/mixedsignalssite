#!/bin/bash

echo "executing setup!"

setupScripts=$(ls ./steps)

cd ./steps

for script in "${setupScripts[@]}"
  do
    # windows carriage return issue 
    sed -i 's/\r//g' ./$script

    bash -c "./$script"
  done