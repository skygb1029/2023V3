const read = require('./read')
const usersData = read.transfer()

// 验证用户账户和密码的函数
function authenticate(account, password) {
  const user = usersData.find((u) => u.account === account && u.password === password)
  return user // 如果找到匹配的用户，则返回用户对象；否则返回 undefined
}

module.exports = {
  authenticate,
}
