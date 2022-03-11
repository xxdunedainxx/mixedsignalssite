#! /bin/bash

APPLICATION_DEPLOYMENT_PATH=/home/zach
HOME=$(pwd)

if [[ ! -f "./deployment/INSTANCE.txt" || ! -f "./deployment/SSH_KEY_PATH.txt" || ! -f "./deployment/USERNAME.txt" ]] ;then
  read -p "Please provide your AWS EC2 instance:" AWS_EC2_INSTANCE
  read -p "Please specify the path of your SSH Key" SSH_KEY_PATH
  read -p "Please specify your username" USERNAME

  echo "${AWS_EC2_INSTANCE}" > "./deployment/INSTANCE.txt"
  echo "${SSH_KEY_PATH}"     > "./deployment/SSH_KEY_PATH.txt"
  echo "${USERNAME}"         > "./deployment/USERNAME.txt"
else
  AWS_EC2_INSTANCE=$(cat "./deployment/INSTANCE.txt")
  SSH_KEY_PATH=$(cat "./deployment/SSH_KEY_PATH.txt")
  USERNAME=$(cat "./deployment/USERNAME.txt")
fi

./build.sh

mkdir deployment/images

echo "Bundling latest docker images in deployment/images"

docker save mixed-signals-site:latest | gzip > deployment/images/mixed-signals-site.tar.gz

# Upload steps

echo "Uploading docker files..."
scp -v -i "${SSH_KEY_PATH}" "deployment/images/mixed-signals-site.tar.gz" "${USERNAME}@${AWS_EC2_INSTANCE}":"${APPLICATION_DEPLOYMENT_PATH}"

echo "Publishing util scripts"
scp -v -i "${SSH_KEY_PATH}" "deployment/setup/install_new_ms_site.sh" "${USERNAME}@${AWS_EC2_INSTANCE}":"${APPLICATION_DEPLOYMENT_PATH}"
scp -v -i "${SSH_KEY_PATH}" "run.sh" "${USERNAME}@${AWS_EC2_INSTANCE}":"${APPLICATION_DEPLOYMENT_PATH}"