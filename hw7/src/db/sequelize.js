import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  dialectOptions: {
    ssl: true,
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    throw error;
  }
};

export default connectToDatabase;
