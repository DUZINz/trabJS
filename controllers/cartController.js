// controllers/cartController.js
const { Cart, CartItem, Product } = require('../models');

module.exports = {
  async addToCart(req, res) {
    try {
      const { productId, quantity, userId } = req.body;

      const cart = await Cart.findOne({ where: { userId }, include: [{ model: CartItem, as: 'items' }] });
      const product = await Product.findByPk(productId);

      if (!product || product.stock < quantity) {
        return res.status(400).json({ error: 'Invalid product or insufficient stock' });
      }

      const cartItem = await CartItem.create({ cartId: cart.id, productId, quantity });
      return res.status(201).json(cartItem);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to add product to cart' });
    }
  },

  async removeFromCart(req, res) {
    try {
      const { id } = req.params;
      await CartItem.destroy({ where: { id } });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Failed to remove item from cart' });
    }
  },

  async viewCart(req, res) {
    try {
      const { userId } = req.query;
      const cart = await Cart.findOne({ where: { userId }, include: [{ model: CartItem, as: 'items' }] });
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to fetch cart' });
    }
  }
};
