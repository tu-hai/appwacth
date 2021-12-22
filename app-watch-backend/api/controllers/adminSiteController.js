'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')
const md5 = require('md5')
//const md5 = require('md5');


module.exports = {
    login: (req, res) => {
        console.log('request',req.body)
        let sql = 'SELECT * FROM admin WHERE Email =  ? AND Pass = ?';
         db.query(sql, [req.body.Email, req.body.Pass], (err, response) => {
            if (err) throw err
            if(response.length > 0)
                 res.json(response[0].Email)
            else 
                 res.json("not found")
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

// app.get("/arrivals/:flightNo", cors(), function(req, res) {
//     var flightNo = req.params.flightNo;
//     var minSize = req.query.minSize;
  
//     var sql = "SELECT * FROM arrivals WHERE flight = ? AND size >= ?";
//     connection.query(sql, [ flightNo, minSize ], function(err, rows, fields) {
//     });
//   });