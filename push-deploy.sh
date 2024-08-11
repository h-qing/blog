# !/usr/bin/env sh
# 生成静态文件


rm -rf docs/.vuepress/dist

git add -A

git commit -m 'add'

git push origin master -f  https://gitee.com/hq-study/blog.git
git push origin master -f  git@github.com:h-qing/blog.git


sed -i "s#BASE='/'#BASE='/blog/'#g" docs/.vuepress/config.ts

npm run build

#cp Dockerfile docs/.vuepress/dist

#cp nginx.conf docs/.vuepress/dist

# 进入生成的文件夹
cd docs/.vuepress/dist

git init

git add -A

# shellcheck disable=SC2046
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f  https://gitee.com/hq-study/blog.git master:page
git push -f  git@github.com:h-qing/blog.git master:page

