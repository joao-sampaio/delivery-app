const SaleProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    productId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'sales_products',
    underscored: true,
    timestamps: false,
  });

  SaleProduct.associate = (models) => {
    models.Sales.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
    models.Product.belongsToMany(models.Sales, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
  };

  return SaleProduct;
}

module.exports = SaleProduct;
