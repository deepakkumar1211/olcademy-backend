import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Fix the size of JSON
app.use(express.json({ limit: "16kb" }));

// For encoding URL
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Routes import
import productRouter from "./routes/product.routes.js";

// Routes declaration
app.use("/api/v1/product", productRouter);

export { app };
