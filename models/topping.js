module.exports = (db, DataTypes) => {
  const Topping = db.define('topping', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT
  });

  return Topping;
};
