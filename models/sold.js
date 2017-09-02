module.exports = (db, DataTypes) => {
  const Sold = db.define('sold', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    profit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ice_level: DataTypes.INTEGER,
    sugar_level: DataTypes.INTEGER
  });

  return Sold;
};
