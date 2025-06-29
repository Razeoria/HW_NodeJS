import 'dotenv/config';
import startServer from './server.js';
import connectToDatabase from './db/sequelize.js';
import './db/App.js';

const bootstrap = async () => {
  try {
    await connectToDatabase();
    startServer();
  } catch (error) {
    console.error('Failed to start application:', error.message);
    process.exit(1);
  }
};

bootstrap();
