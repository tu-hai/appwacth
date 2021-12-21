'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM sanpham'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    category: (req, res) => {
        let sql = 'SELECT * FROM loaisanpham'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    productByIdLoai: (req, res) => {

        console.log('reqest paging ===> ', req.params)
        const IDLoai =  req.params.IDLoai
        const page =  1 //req.params.page
        const space =  5
        // xác định vị trí 
        const limit =(page -1 ) * space;
        let sql = 'SELECT * FROM sanpham WHERE IDLoai =' + IDLoai;
        db.query(sql, (err, response) => {
           if (err) throw err
           res.json(response)
       })
    },
    productForWonMen: (req, res) => {
        let sql = 'SELECT * FROM sanpham WHERE IDLoai = 2';
        db.query(sql, (err, response) => {
           if (err) throw err
           res.json(response)
       })
    },
    

    detail: (req, res) => {
        let sql = 'SELECT * FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE products SET ? WHERE id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO products SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}