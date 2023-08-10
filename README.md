水滴 后端服务

## 图片上传服务端文档
- 简单介绍：https://help.aliyun.com/document_detail/31926.html
- Nodejs 代码：https://help.aliyun.com/document_detail/322691.htm?spm=a2c4g.11186623.0.0.1607566aUI6l0V#task-2121074

## 发送短信的阿里云文档
https://dysms.console.aliyun.com/quickstart

## 接口规范
返回数据的接口规范：

```json
{
  code: 200, // 10001 10002
  data: [], // {}
  message: 'error',
  page: {
    start: 0,
    length: 20,
    total: 100,
  },
  debug: '',
  key: '',
}
```
## 使用 JWT 保存登录状态
> 相关文档：https://docs.nestjs.com/security/authentication
1. pnpm i @nestjs/jwt @nestjs/passport passport-jwt passport -S
2. 注册 JwtModule
3. 添加自定义 JWT 策略
4. 创建 Guard，引入 JWT 策略
5. 修改登录接口
6. PC 端页面获取 JWT

## 使用 plop 生成模版代码
> 文档：https://plopjs.com/documentation/
> hbs：https://handlebarsjs.com/guide/#what-is-handlebars
1. pnpm i plop -D
2. 配置 plopfile.js 文件
3. npx plop

## 按照商品的门店距离做排序
1. createQueryBuilder 自定义 SQL 查询
2. ST_Distance 计算两个地理对象之间的最短距离
3. ST_GeomFromText 把文本表示形式转换为地理对象（如点、线、多边形等）
4. getRawAndEntities 获取自定义的查询结果

## 距离计算的两个扩展问题
1. 坐标转换问题： https://github.com/wandergis/coordtransform
2. 性能优化的问题：（先缩小范围再去排序）geohash https://github.com/sunng87/node-geohash

## 微信公众号网页授权文档
1. 网页授权：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html
2. 查看微信接口权限：https://mp.weixin.qq.com/advanced/advanced?action=table&token=360474277&lang=zh_CN
3. 配置微信允许的域名：https://mp.weixin.qq.com/cgi-bin/settingpage?t=setting/function&action=function&token=360474277&lang=zh_CN

## 微信支付文档
1. 接入文档：https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_1.shtml
2. API 文档： https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_4.shtml
3. 第三方微信支付 SDK：https://github.com/klover2/wechatpay-node-v3-ts

## 线上体验地址
https://water-drop.yondu.vip

## 如何测试
- 安装所需的包：`pnpm i sqlite3 -D`
- nestjs 测试文档：https://docs.nestjs.com/fundamentals/testing#testing-utilities

## 如何本地部署？
1. 项目构建：`pnpm run build`
2. 创建一个安装文件夹 `server`
3. 配置.env: 把 `.env.template` 文件内容配置好，然后改成 `.env` 放在 `server` 目录下。
4. 拷贝 `dist` 文件到 `server` 文件夹下
5. 配置 `pem` 文件：把微信支付用到的 `pem` 文件放到 `WXPAY_DIR` 配置的文件夹下
6. 复制 `package.json` 和 `pnpm-lock.yaml` 文件到根目录
7. 执行 `pnpm i`，前提是已经安装了 pnpm，`pnpm i pnpm -g`
8. 启动：`pnpm start:prod`

## Dockerfile 有哪些指令？
- FROM：指定基础镜像，例如 FROM ubuntu:latest。
- MAINTAINER：指定镜像维护者的信息。
- RUN：在镜像中执行命令，例如 RUN apt-get update && apt-get install -y nginx。
- CMD：指定容器启动时要执行的命令或者程序，例如 CMD ["nginx", "-g", "daemon off;"]。
- EXPOSE：指定容器内部开放的端口号，例如 EXPOSE 80。
- ENV：设置环境变量，例如 ENV NODE_ENV=production。
- ADD：将本地文件或目录复制到容器中，例如 ADD ./app /app。
- COPY：将本地文件或目录复制到容器中，例如 COPY ./app /app。
- WORKDIR：设置工作目录，例如 WORKDIR /app。
- USER：设置运行命令的用户，例如 USER nginx。
- VOLUME：创建挂载点，例如 VOLUME /data。

## 使用 docker
- 构建镜像：`docker build -t server:v1 .`
- 阿里云镜像服务：https://cr.console.aliyun.com/cn-beijing/instances
- docker 文档：https://www.runoob.com/docker/docker-tutorial.html

## docker 里安装 mysql
- 文档：https://www.runoob.com/docker/docker-install-mysql.html
- docker pull mysql:latest
- 启动 mysql 镜像并初始化数据：docker run -itd  --name mysql-test -p 3316:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=test -v /Users/blackstone/Desktop/docker/init:/docker-entrypoint-initdb.d mysql
