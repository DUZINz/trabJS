// controllers/productController.js
const { Product } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to create product' });
    }
  },

  async getAll(req, res) {
    try {
      const products = await Product.findAll();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to fetch products' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.update(req.body, { where: { id } });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to update product' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Product.destroy({ where: { id } });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Failed to delete product' });
    }
  }
};
