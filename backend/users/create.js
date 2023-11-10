const fs = require('fs')

function createUser() {
  // 将用户数据写入JSON文件
  const userData = JSON.parse({ account: account, password: password, userName: 'test' })
  const createUser = fs.writeFileSync('users.json', JSON.stringify(userData, null, 2))
  return createUser
}

module.exports = {
  createUser,
}
