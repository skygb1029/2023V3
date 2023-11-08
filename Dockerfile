# 使用官方的 Nginx 镜像
FROM nginx:latest

# 复制 Nginx 配置文件到容器
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 复制 Vue 3 项目构建结果到 Nginx 的默认 Web 根目录
COPY dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]