#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
#set -e

# 生成静态文件
yarn build

# 上传到服务器
scp -r docs/.vuepress/dist/* root@www.raray.cn:/usr/local/nginx/html/
