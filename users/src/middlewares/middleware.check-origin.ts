import { NextFunction, Request, Response } from "express";

export async function middlewareCheckOrigin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Origin request: ", req.headers.host);
  if (req.headers.host === "localhost:3000") {
    return next();
  }
  return res.status(403).send("You are forbidden to do direct requests.");
}
