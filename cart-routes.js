const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send([{id: '01',
            product: 'eggs',
            price: '$2.00',
            quantity: "2"},
            {id: '02',
            product: 'milk',
            price: '$1.89',
            quantity: "1"},
            {id: '03',
            product: 'bread',
            price: '$3.50',
            quantity: "3"},]); 
});

router.post('/', (req, res) => {
    if(req.body) {
        res.status(201).send(req.body);
    }
    else {
        res.sendStatus(400);
    }
});

router.put('/:id', (req, res) => {
    res.send(`Added cart item with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Deleted cart item with id ${req.params.id}`);
});

module.exports = router;