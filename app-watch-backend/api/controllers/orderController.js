'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {

    order: (req, res) => {
        console.log('====>Gọi api orderr')
        let sql = 'INSERT INTO donhang SET ?'
        db.query(sql, [req.body], (err, response) => {
            if (err) throw err
            res.json('ordered')
        })
    },
    orderdetail: (req, res) => {
        console.log('====>Gọi api order detail', req.body)
        let sql = 'INSERT INTO chitietdonhang SET ?'
        db.query(sql, [req.body], (err, response) => {
            if (err) throw err
            res.json('detail')
        })
    },
}