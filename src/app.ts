import express, { Express, Request, Response } from "express";
import moderationRoutes from "./api/v1/routes/moderationRoutes";
import config from './config';

const app: Express = express();
app.use(express.json());

/**
 * Mount moderation routes with versioned path from config
 */
app.use(`/api/${config.API.VERSION}/moderation`, moderationRoutes);

/**
 * Default error handler for unmatched routes
 */
app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: "Endpoint not found" });
});

export default app;