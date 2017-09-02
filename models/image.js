module.exports = (db, DataTypes) => {
  const Image = db.define('image', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return Image;
};
