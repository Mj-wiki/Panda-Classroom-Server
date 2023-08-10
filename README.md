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

