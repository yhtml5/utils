# npm publish 执行打包后会触发此脚本

set -e # 遇到错误时停止执行

base=$( cd "$(dirname "$0")" ; pwd -P )/../

echo 'clean publish files'
cd $base/dist/
for file in *; do
  echo 'clean '$base$file
  rm -r $base$file
done
