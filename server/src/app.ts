import { Message } from "@library/types";
import express, { NextFunction, Request, Response } from "express";
// import { auth } from "express-openid-connect";

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: "a long, randomly-generated string stored in env",
//   baseURL: "http://localhost:3000",
//   clientID: "4oiCxHnMJvUWVwkmOG57eEk6OCEbbTlC",
//   issuerBaseURL: "https://dev-usdrboz675x6ip1z.eu.auth0.com",
// };

export const app = express();

app.use(express.json());

// app.use(auth(config));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.debug(
    "incoming request >>>",
    req.originalUrl,
    "method >>>",
    req.method
  );
  next();
});

// app.get("/", (req, res) => {
//   // console.debug(req.oidc);
//   res.json({ success: true });
// });

app.get("/api", (_, res) => {
  res.json({ success: true });
});

app.post("/api/users", (req, res) => {
  res.json([]);
});

// Vite is doing the work of starting the server
// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
