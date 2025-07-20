import "dotenv/config";

import startServer from "./server.js";
import { connectDataBase } from "./db/sequelize.js";

const bootstrap = async () => {
    await connectDataBase();
    startServer();
};

bootstrap();
