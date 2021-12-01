// Creating the project model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deployed_link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      repo_link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;