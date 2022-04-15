# !/usr/bin/env sh
# 生成静态文件

rm -rf docs/.vuepress/dist

sed -i "s/\\/blog\\//\\//g" docs/.vuepress/config.ts

npm run build

git add .

# shellcheck disable=SC2046
git commit -m 'deploy'git

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f  https://gitee.com/hq-study/blog.git master:master

