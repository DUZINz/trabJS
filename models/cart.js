// models/Cart.js
module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      userId: DataTypes.INTEGER,
    });
  
    Cart.associate = (models) => {
      Cart.hasMany(models.CartItem, { as: 'items' });
    };
  
    return Cart;
  };
  
  // models/CartItem.js
  module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define('CartItem', {
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    });
  
    CartItem.associate = (models) => {
      CartItem.belongsTo(models.Product, { foreignKey: 'productId' });
    };
  
    return CartItem;
  };
  