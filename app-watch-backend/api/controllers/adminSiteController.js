'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')
const md5 = require('md5')
//const md5 = require('md5');


module.exports = {

    // admin đăng nhập
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

    // lấy tất cả danh dách user 
    users: (req, res) => {
        let sql = 'SELECT * FROM user';
         db.query(sql, (err, response) => {
            if (err) throw err
            if(response.length > 0) {
                const result = []
                for (const u of response) {
                        delete u.Pass
                        result.push(u)
                }
                res.json(result)

            }
                
            else 
                 res.json("not found")
        })
    },
   
    // Xóa 1 user
    delete: (req, res) => {
        let sql = 'DELETE FROM user WHERE IDuser = ?'
        db.query(sql, [Number(req.params.IDuser)], (err, response) => {
            if (err) throw err
            res.json("Deleted")
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

    // Lấy đơn hàng
    orders: (req, res) => {
        let sql = 'SELECT * FROM donhang join chitietdonhang on donhang.IDdonhang = chitietdonhang.IDdonhang';
         db.query(sql, (err, response) => {
            if (err) throw err
            if(response.length > 0) {
                res.json(response)
            }
                
            else 
                 res.json("not found")
        })
    },

    //Lấy thông tin chung
    totalUser: (req, res) => {
        let sql = 'SELECT * FROM user';
         db.query(sql, (err, response) => {
            if (err) throw err
                res.json(response.length)
        })
    },
    totaProduct: (req, res) => {
        let sql = 'SELECT * FROM sanpham';
         db.query(sql, (err, response) => {
            if (err) throw err
                res.json(response.length)
        })
    },
    totalOrder: (req, res) => {
        let sql = 'SELECT * FROM donhang';
         db.query(sql, (err, response) => {
            if (err) throw err
                res.json(response.length)
        })
    },
    totalCategory: (req, res) => {
        let sql = 'SELECT * FROM loaisanpham';
         db.query(sql, (err, response) => {
            if (err) throw err
                res.json(response.length)
        })
    },
    productMaxOrder: (req, res) => {
        let sql = 'SELECT  IDchitet,Tensanpham,  MAX(Soluong) as sl FROM chitietdonhang GROUP BY IDchitet order by Soluong desc limit 1';
         db.query(sql, (err, response) => {
            if (err) throw err
                res.json(response[0])
        })
    },
}
