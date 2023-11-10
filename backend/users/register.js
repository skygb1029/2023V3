const read = require('./read')
const usersData = read.transfer()

// 验证用户账户是否使用過
function ifAccount(account, password) {
  const user = usersData.find((u) => u.account === account)
  return user ? true : false
}

module.exports = {
  ifAccount,
}
