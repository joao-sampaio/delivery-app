const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {   
    underscored: true,
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.Sales,
      { foreignKey: 'user_id', as: 'user' }
    )
  };

  return User;
};

module.exports = User;