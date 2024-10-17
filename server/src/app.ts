import { Message } from "@library/types";
import express, { NextFunction, Request, Response } from "express";

export const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.debug(
    "incoming request >>>",
    req.originalUrl,
    "method >>>",
    req.method
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  const message: Message = {
    title: "Hello World! (from server)",
    description: "This is a simple message from the server.",
  };
  res.json(message);
});

app.post("/api/users", (req, res) => {
  res.json([]);
});

// Vite is doing the work of starting the server
// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
