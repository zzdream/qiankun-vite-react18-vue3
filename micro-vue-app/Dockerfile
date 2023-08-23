# 使用一个基础的Node.js镜像作为构建环境
FROM node:18 as build-stage2

# 设置工作目录
WORKDIR /simpro_front

# 安装pnpm
RUN npm install -g pnpm

# 复制package.json和package-lock.json到容器中
COPY package*.json ./
COPY pnpm-lock.yaml .

# 安装项目的依赖
RUN pnpm install

# 将整个项目复制到容器中
COPY . .

# 构建项目
RUN pnpm run build:docker

# 使用一个更小的Nginx镜像作为运行环境
FROM nginx:1.21-alpine as production-stage

# 复制构建好的项目文件到Nginx的默认站点目录
COPY --from=build-stage2 /simpro_front/dist /usr/share/nginx/html/simpro_front

# 复制自定义的NGINX配置文件到容器中
COPY nginx.conf /etc/nginx/conf.d/simpro_front.conf

# Nginx的默认端口为80，所以需要将容器的80端口映射到主机上
EXPOSE 80

# 在容器启动时运行Nginx服务器
CMD ["nginx", "-g", "daemon off;"]
