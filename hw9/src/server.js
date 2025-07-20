import express from "express";
import cors from "cors";

import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

import userRoutes from "./routers/user.router.js";
import authRoutes from "./routers/auth.routes.js";

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api/auth", authRoutes);
    app.use("/api/users", userRoutes);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
};

export default startServer;
