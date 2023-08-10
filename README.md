水滴 后端服务

## 图片上传服务端文档
简单介绍：https://help.aliyun.com/document_detail/31926.html
Nodejs 代码：https://help.aliyun.com/document_detail/322691.htm?spm=a2c4g.11186623.0.0.1607566aUI6l0V#task-2121074

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
