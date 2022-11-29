const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    sellerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },

  }, {
    underscored: true,
    timestamps: false,
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'user' }
    )
    Sales.belongsTo(models.User,
      { foreignKey: 'seller_id', as: 'seller' }
    )
  };

  return Sales;
};

module.exports = Sales;