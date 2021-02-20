/*
 * @Author: your name
 * @Date: 2021-02-18 20:20:21
 * @LastEditTime: 2021-02-19 11:09:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-wxl/router.js
 */
const router = require('koa-router')()
const homeController = require('./controller/home')
// const router = new Router({
//   prefix: '/manage'
// })
module.exports = (app) => {
  router.get('/', homeController.index)
  router.post('/user/login', homeController.login)
  router.get('/404', homeController.notFound)
  router.get('/user/:id', homeController.getUserInfo)
  router.get('/home', homeController.home)
  // router.all('/', async (ctx, next) => {
  //   console.log("all: ");
  //   ctx.body = "all"
  // })
  app.use(router.routes()).use(router.allowedMethods())
}
