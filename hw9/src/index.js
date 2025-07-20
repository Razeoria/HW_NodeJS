import "dotenv/config";
import startServer from "./server.js";
import { connectDatabase } from "./db/sequelize.js";

const bootstrap = async () => {
    await connectDatabase();
    startServer();
};

bootstrap();

