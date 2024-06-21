const fs = require('fs')
const path = require('path')

const configPath = path.resolve(__dirname, 'login-success.json')
const rawConfig = fs.readFileSync(configPath)
const loginData = JSON.parse(rawConfig)


module.exports = loginData
