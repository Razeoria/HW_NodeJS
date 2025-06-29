import { sequelize } from './sequelize.js';
import { DataTypes } from 'sequelize';

const App = sequelize.define('App', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: 'App already exists',
    },
  },
  size: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
}, {
  tableName: 'apps',
  timestamps: false,
});

await App.sync();

export default App;
