module.exports = (db, DataTypes) => {
  const Menu = db.define('Menu', {
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  return Menu;
};
