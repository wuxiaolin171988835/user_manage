/*
 * @Author: your name
 * @Date: 2021-02-03 17:48:45
 * @LastEditTime: 2021-02-04 17:37:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-wxl/app.js
 */
const koa = require('koa')
const app = new koa()
// 1.封装logger中间件
// const logger = async function (ctx, next) {
//   console.log("host:" + ctx.host, "url:" + ctx.url);
//   await next()
// }
// app.use(logger)
// app.use(async (ctx, next) => {
//   // await next()
//   // ctx.response.type = "text/html"
//   // ctx.response.body = {
//   //   url: ctx.request.url,
//   //   query: ctx.request.query,
//   //   queryString: ctx.request.querystring
//   // }
//   //1. post请求获取参数
//   // let postData = ""
//   // ctx.req.on('data', data => {
//   //   postData += data
//   // })
//   // ctx.req.on('end', () => {
//   //   console.log("postData: " + postData);
//   // })
//   //2. request method
//   // if (ctx.request.method === 'POST') {

//   // } else if (ctx.request.method === 'GET') {
//   //   console.log("ctx.url: " + ctx.url);
//   //   if (ctx.url === '/') {
//   //     ctx.response.body = "这是首页"
//   //     ctx.response.status = 200
//   //   } else {
//   //     ctx.response.body = "这是其他页"
//   //   }
//   // }
//   // 3.content-type
//   // console.log("ctx.request.type: " + ctx.request.type);
//   // if (ctx.request.accepts('json')) {
//   //   console.log("json: ");
//   //   ctx.response.type = "json";
//   //   ctx.response.body = { data: 'Hello world' };
//   //   ctx.throw(403)
//   // } else if (ctx.request.accepts('html')) {
//   //   console.log("html: ");
//   //   ctx.response.type = "html";
//   //   ctx.response.body = "<h1 style='color:red'>Hello world</h1>";
//   // } else {
//   //   console.log("text: ");
//   //   ctx.response.type = "text";
//   //   ctx.response.body = "Hello world";
//   // }
//   // 4.ctx基础信息
//   // console.log("host:" + ctx.host, "url:"" + ctx.url);

//   ctx.body = 'document'

// })
//2.中间件执行过程
app.use(async (ctx, next) => {
  console.log("one start");
  await next()
  console.log("one end");
})
app.use(async (ctx, next) => {
  console.log("two start");
  await next()
  console.log("two end");
})
app.use(async (ctx, next) => {
  console.log("third start");
  await next()
  console.log("third end");
})

app.listen(3000)
