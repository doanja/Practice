module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  return sequelize.define('post', {
    title: { type: DataTypes.STRING, validate: { len: [1, 160] }, allowNull: false },
    body: { type: DataTypes.TEXT, validate: { min: 1 }, allowNull: false },
    category: { type: DataTypes.STRING, defaultValue: 'Personal' }
  });
};
