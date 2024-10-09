// controllers/paymentController.js
const { Transaction } = require('../models');

module.exports = {
  async payWithCreditCard(req, res) {
    try {
      const { userId, totalAmount } = req.body;
      const transaction = await Transaction.create({ userId, totalAmount, paymentMethod: 'credit-card', status: 'pending' });
      
      // Simulate payment processing...
      transaction.status = 'completed';
      await transaction.save();

      return res.status(201).json(transaction);
    } catch (error) {
      return res.status(400).json({ error: 'Credit card payment failed' });
    }
  },

  async payWithPix(req, res) {
    try {
      const { userId, totalAmount } = req.body;
      const transaction = await Transaction.create({ userId, totalAmount, paymentMethod: 'PIX', status: 'pending' });

      // Simulate PIX payment processing...
      transaction.status = 'completed';
      await transaction.save();

      return res.status(201).json(transaction);
    } catch (error) {
      return res.status(400).json({ error: 'PIX payment failed' });
    }
  },

  async getStatus(req, res) {
    try {
      const { transactionId } = req.params;
      const transaction = await Transaction.findByPk(transactionId);

      if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
      }

      return res.status(200).json(transaction);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to fetch transaction status' });
    }
  }
};
