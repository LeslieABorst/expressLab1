const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/cart-items', (req, res) => {
    pool.query('select * from shoppingcart').then(result => res.json(result.rows));
});

router.post('/cart-items', (req, res) => {
    const sql = 'insert into shoppingcart (product, price, quantity) values($1::text, $2::real, $3::int)';
    const values = [req.body.product, req.body.price, req.body.quantity];
    pool.query(sql, values).then(() => {
        pool.query('select * from shoppingcart').then(result => res.json(result.rows));
    });
});

router.put('/cart-items/:id', (req, res) => {
    const sql = `update shoppingcart set poduct=$1::text, price=$2::real, quantity=$3::int where id = ${req.params.id}`;
    const values = [req.body.product, req.body.price, req.body.quantity];
    pool.query(sql, values).then(() => {
        pool.query('select * from shoppingcart').then(result => res.json(result.rows));
    });
});

router.delete('/cart-items/:id', (req, res) => {
    pool.query(`delete from shoppingcart where id = ${req.params.id}`).then(() => {
        pool.query('select * from shoppingcart').then(result => res.json(result.rows));
    });
});

module.exports = router;