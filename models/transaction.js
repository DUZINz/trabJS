// models/Transaction.js
module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
      userId: DataTypes.INTEGER,
      totalAmount: DataTypes.DECIMAL(10, 2),
      paymentMethod: DataTypes.STRING,
      status: DataTypes.STRING
    });
  
    return Transaction;
  };
  