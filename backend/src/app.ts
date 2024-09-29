import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
const app: Application = express();
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Health endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "সার্ভার সঠিকভাবে কাজ করছে এবং কোনো সমস্যা নেই",
  });
});

// Routes

app.use("/api/v1", router);
app.use(globalErrorHandler)
app.use(notFound);

export default app;
