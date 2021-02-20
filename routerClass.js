/*
 * @Author: your name
 * @Date: 2021-02-07 19:52:12
 * @LastEditTime: 2021-02-07 20:17:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-wxl/router.js
 */
class Router {
  constructor() {
    this._routes = []
  }
  get(url, handler) {
    this._routes.push({
      url: url,
      // method: 'GET',
      handler: handler
    })
  }
  routes() {
    return async (ctx, next) => {
      const { method, url } = ctx
      const matchedRouter = this._routes.find(item => item.url === url)
      if (matchedRouter && matchedRouter.handler) {
        await matchedRouter.handler(ctx, next)
      } else {
        await next()
      }
    }
  }
}
module.exports = Router



