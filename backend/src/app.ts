import express, { Application, Request, Response } from "express";
import cors from "cors";
import { CustomerControllers } from "./app/modules/customer/customer.controller";
import router from "./app/routes";
const app: Application = express();

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Health endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Server is healthy",
  });
});

// Routes

app.use("/api/v1", router);

export default app;
