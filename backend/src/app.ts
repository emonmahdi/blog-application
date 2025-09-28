import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
// import authRoutes from "./modules/auth/auth.routes";
// import postRoutes from "./modules/posts/post.routes";
// import errorHandler from "./middlewares/error.middleware";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));

app.get("/", (_req, res) => res.json({ ok: true }));

// app.use("/api/auth", authRoutes);
// app.use("/api/posts", postRoutes);

// app.use(errorHandler);

export default app;
