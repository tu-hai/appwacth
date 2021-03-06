'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
const md5 = require('md5')
//const md5 = require('md5');


module.exports = {
    login: (req, res) => {
        console.log('request',req.body)
        debugger
        // Kiểm tra Email và Pass có trong db user chưa. Pass dc mã hóa MD5 cho nên phải giải mã trước khi tìm.
        let sql = 'SELECT * FROM user WHERE Email =  ? AND Pass = ?'; // `${req.body.Email}` +    ' and Pass = ' +  md5(req.body.Pass)
         db.query(sql, [req.body.Email, md5(req.body.Pass) ], (err, response) => {
            if (err) throw err
            if(response.length > 0)
                 res.json("success")
            else 
               res.json("")
        })
    },

    register: (req, res) => {
       // b1: kiểm tra email đã có chưa:
       let sql = 'SELECT * FROM user WHERE Email = ?'
       db.query(sql, [req.body.Email], (err, response) => {
           if (err) throw err
           if (response.length  > 0) {
            res.json('hasdata')
           }

           // b2 inbert user vào db
           else {
               const user = req.body
               user.Pass = md5(user.Pass)
            let sql = 'INSERT INTO user SET ?'
            db.query(sql, [user], (err, response) => {
                if (err) throw err
                res.json('success')
            })
           }
          
       })


       
    },

}