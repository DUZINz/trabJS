// routes/cart.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/cart/add', cartController.addToCart);
router.delete('/cart/remove/:id', cartController.removeFromCart);
router.get('/cart', cartController.viewCart);

module.exports = router;
s