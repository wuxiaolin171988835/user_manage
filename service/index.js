/*
 * @Author: your name
 * @Date: 2021-02-20 17:42:20
 * @LastEditTime: 2021-02-20 18:05:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-wxl/service/index.js
 */
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('user_manage', 'root', 'wxl171988', {
  dialect: 'mysql'
})
const User = sequelize.define('user_list', {
  name: Sequelize.STRING,
  age: Sequelize.NUMBER,
  sex: Sequelize.STRING,
}, {
  timestamps: false
})
const getUserList = async () => {
  const data = await User.findAll()
  console.log("data: " + JSON.stringify(data));
}
getUserList()