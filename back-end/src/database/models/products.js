const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4,2)
    },
    urlImage: {
      allowNull: false,
      default: '',
      type: DataTypes.STRING
    }
  }, {
    tableName: 'products',
    underscored: true,
    timestamps: false,
  });

  return Product;
}

module.exports = Product;
