/*
 * @Author: your name
 * @Date: 2021-02-19 10:55:40
 * @LastEditTime: 2021-02-19 11:22:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-wxl/controller/home.js
 */
const homeService = require('../service/home')
module.exports = {
  index: async (ctx, next) => {
    await ctx.render('index')
    await next()
  },
  login: async (ctx, next) => {
    const { username, password } = ctx.request.body
    const message = await homeService.login(username, password)
    ctx.body = message
    await next()
  },
  notFound: async (ctx, next) => {
    ctx.body = "页面不存在！！！"
    await next()
  },
  getUserInfo: async (ctx, next) => {
    ctx.body = `我的用户ID是${ctx.params.id}`
    await next()
  },
  home: async (ctx, next) => {
    await ctx.render('index1')
    await next()
  }
}
