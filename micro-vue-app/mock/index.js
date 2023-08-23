#! /usr/bin/env node
const express = require('express')
const configs = require('./data.js')
const app = express()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') //当允许携带cookies此处的白名单不能写’*’
  res.header('Access-Control-Allow-Headers', 'content-type,Content-Length, Authorization,Origin,Accept,X-Requested-With') //允许的请求头
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT') //允许的请求方法
  next()
})

configs.forEach(item => {
  app[item.method](item.url, (req, res) => {
    // setTimeout(()=>{res.json(item.data);},2000)
    console.log(res)
    res.json(item.data)
  })
})

app.listen(30001, err => {
  if (err) console.error(err)
  console.log('The server is listening at port 30001...')
})
