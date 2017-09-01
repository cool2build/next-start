module.exports = (db, DataTypes) => {
  const Session = db.define('Session', {
    session_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    session: {
      type: DataTypes.JSON,
      allowNull: false
    },
    expire: {
      type: DataTypes.DATE(6),
      allowNull: false
    }
  }, {
    tableName: 'sessions',
    timestamps: false
  });

  return Session;
};
