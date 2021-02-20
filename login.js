/*
 * @Author: your name
 * @Date: 2021-02-05 10:44:06
 * @LastEditTime: 2021-02-19 10:48:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-wxl/login.js
 */
const koa = require('koa')
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const static = require('koa-static')
const path = require('path')
const app = new koa()


// app.use(async (ctx, next) => {
//   if (ctx.request.url === '/' && ctx.request.method === 'GET') {
//     ctx.type = 'html'
//     let html = `
//      <h1>登录</h1>
//       <form action="" method="POST">
//         <p>用户名</p>
//         <input type="text" name="userName"><br>
//         <p>密码</p>
//         <input type="password" name="password"><br>
//         <button type="submit">submit</button>
//       </form>
//     `
//     ctx.body = html
//   } else if (ctx.request.url === '/' && ctx.request.method === 'POST') {
//     let postData = ctx.request.body
//     ctx.body = postData
//   }
// })
//router使用
// router.get('/', (ctx, next) => {
//   ctx.body = "首页"
// })
// router.post('/', (ctx, next) => {
//   ctx.body = "post"
// })
// views及static使用
app.use(views(__dirname + '/views'),
  {
    map: {
      html: 'ejs'
    }
  }
)
app.use(static(path.join(__dirname, '/static')))
// app.use(async (ctx, next) => {
//   // ctx.body = ctx.request.url
//   if (ctx.request.url == '/404' && ctx.request.method === 'GET') {
//     ctx.body = "页面不存在"
//   }
// })



app.use(bodyParser())  //router依赖于bodyparse解析参数
router(app)
app.use(views).use(static)
// .use(router.allowedMethods())
app.listen(8000, () => {
  console.log("Server is running at http://localhost:8000/");
})
