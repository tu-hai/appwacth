'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')
const { json } = require('express/lib/response')

module.exports = {

    order: (req, res) => {
        console.log('====>Gọi api orderr')
        let sql = 'INSERT INTO donhang SET ?'
        db.query(sql, [req.body], (err, response) => {
            if (err) throw err
            console.log("param đơn hàng ==>>>",req.body)
           // Chổ này cần trả về max idDonhang  để làm tham số cho api order-detail..    
           const sql2 = "SELECT count(IDdonhang) as MaxID FROM donhang order by count(IDdonhang) desc limit 1"
           db.query(sql2, (err, response) => {
            console.log('Lấy max IDdonhang ==>>', response[0].MaxID)
            if (err) throw err
            res.json(Number(response[0].MaxID))
           }) 

        })
    },

    // chuẩn hóa param để ghi vào bản chi tiết đơn hàng
    orderdetail: (req, res) => {    
        const tmpParam =JSON.parse(req.body['data'])
        const param = [] //
        // Xử lý kiểu dữ liệu cho khớp với DB
        tmpParam.forEach(e => {
            const data = {
                IDdonhang: Number(e.IDdonhang),
                ID: Number(e.ID),
                Tensanpham: e.Tensanpham,
                Giasp: Number(e.Giasp),
                Soluong: Number(e.Soluong)
            }
            param.push(data)
        });
        // Insert mảng item đơn hàng vào DB
        db.query(
            'INSERT INTO chitietdonhang (IDdonhang, ID, Tensanpham, Giasp, Soluong) VALUES ?',
            [param.map(e => [
                e.IDdonhang,
                e.ID, 
                e.Tensanpham, 
                e.Giasp,
                e.Soluong
            ])],
            (err, response) => {
                if (err) throw err
                res.json('detail') 
            }
        );
    },
}