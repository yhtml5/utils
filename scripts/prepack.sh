# npm publish 执行打包前会触发此脚本

set -e # 遇到错误时停止执行

base=$( cd "$(dirname "$0")" ; pwd -P )/../

echo 'build'

npm run build

echo 'prepare publish files'
cd $base/dist/
for file in *; do
  echo 'prepare '$base$file
  cp -R $file $base$file
done
