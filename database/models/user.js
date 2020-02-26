'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    User.hasMany(Order, { foreignKey: 'user_id' });
  };
  return User;
};