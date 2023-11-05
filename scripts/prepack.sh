# npm publish 执行打包前会触发此脚本

set -e # 遇到错误时停止执行

# https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux/5947802#5947802
RED="\033[0;31m"
YELLOW="\033[1;33m"
GREEN="\033[0;32m"
RESET="\033[0m"

base=$( cd "$(dirname "$0")" ; pwd -P )/../

# echo "${GREEN}> git status...${RESET}"
GIT_NOT_CLEAN=$(git status -s)
if [ -n "$GIT_NOT_CLEAN" ]; then
    echo "${RED}> Please git commit you changes${RESET}"
    echo "$GIT_NOT_CLEAN\n"
    exit 1
else
  git status
  echo "git empty"
fi

npm i
npm version patch
npm run build

echo 'prepare publish files'
cd $base/dist/
for file in *; do
  echo 'prepare '$base$file
  cp -R $file $base$file
done

