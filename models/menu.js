module.exports = (db, DataTypes) => {
  const Menu = db.define('menu', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNUll: false
    },
    description: DataTypes.TEXT
  });

  return Menu;
};
