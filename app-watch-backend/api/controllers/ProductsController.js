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
        console.log('Gọi api sản phẩm theo lo,ại=>> ', req.params)
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
    
    update: (req, res) => {
        const data = {
              ID:         Number(req.body.ID),
              TenSanPham: req.body.TenSanPham,
              Gia:        Number(req.body.Gia),
              HinhSP:     req.body.HinhSP,
              MoTaSP:     req.body.HinhSP,
              IDLoai:     Number(req.body.IDLoai)
          }
        let sql = 'UPDATE sanpham SET ? WHERE ID = ?'
        db.query(sql, [data, data.ID], (err, response) => {
            if (err) throw err
            res.json("Updated")
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO sanpham SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json('Add')
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM sanpham WHERE ID = ?'
        db.query(sql, [Number(req.params.ID)], (err, response) => {
            if (err) throw err
            res.json("Deleted")
        })
    }
}