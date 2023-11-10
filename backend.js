const { create } = require('core-js/core/object')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/api/', (req, res) => {
  res.send('歡迎來到我的API！')
})

app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id
  console.log(req.params)
  // 根據userId從資料庫或其他資料來源取得使用者資訊
  // 回傳使用者資訊作為JSON回應
  res.json({ id: userId, name: 'John Doe', email: 'johndoe@example.com' })
})

app.get('/api/register', (req, res) => {
  const account = req.query.account
  const password = req.query.password

  // 加载另一个JavaScript文件
  const register = require('./backend/users/register')

  // 使用加载的文件中的功能
  const ifAccount = register.ifAccount(account, password)
  console.log(ifAccount)
  // if (!ifAccount) {
  //   const create = require('./backend/users/create')
  //   const registerUser = create.createUser(account, password)
  //   console.log(registerUser)
  // } else {
  //   res.status(401).json({ error: '帳號已使用' })
  // }

  // if (isAuthenticated) {
  //   // 如果验证成功，返回成功响应
  //   res.json({ account, password, userName: 'jim' })
  // } else {
  //   // 如果验证失败，返回错误响应
  //   res.status(401).json({ error: '身份验证失败' })
  // }
})

app.get('/api/login', (req, res) => {
  const account = req.query.account
  const password = req.query.password

  // 加载另一个JavaScript文件
  const verify = require('./backend/users/verify')

  // 使用加载的文件中的功能
  const isAuthenticated = verify.authenticate(account, password)

  if (isAuthenticated) {
    // 如果验证成功，返回成功响应
    res.json({ account, password, userName: 'jim' })
  } else {
    // 如果验证失败，返回错误响应
    res.status(401).json({ error: '身份验证失败' })
  }
})

app.listen(port, () => {
  console.log(`應用程式正在監聽端口為 ${port}`)
})
