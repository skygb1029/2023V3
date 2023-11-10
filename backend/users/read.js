const fs = require('fs')

// 調用 users 資料
function transfer() {
  const userDataJSON = fs.readFileSync(__dirname + '/users.json', 'utf8')
  const userData = JSON.parse(userDataJSON)
  return userData
}

module.exports = {
  transfer,
}
