/*
 * @Author: your name
 * @Date: 2021-02-19 11:11:30
 * @LastEditTime: 2021-02-20 17:42:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-wxl/service/home.js
 */

module.exports = {
  login: async (username, password) => {
    let message = "账号密码错误!"
    if (username === 'wuxiaolin' && password === 'wuxiaolin') {
      message = "登陆成功！"
    }
    return message
  }
}