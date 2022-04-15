FROM nginx
RUN mkdir /app
COPY /docs/.vuepress/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
