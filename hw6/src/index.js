import 'dotenv/config';
import { connectDatabase } from './db/sequelize.js';
import startServer from './server.js';

const bootstrap = async () => {
  try {
    await connectDatabase();
    startServer();
  } catch (error) {
    console.error('Failed to start application:', error.message);
    process.exit(1);
  }
};

bootstrap();
