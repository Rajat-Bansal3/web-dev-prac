import { Request, Response, NextFunction } from "express";

// Define the errorHandler function
export const errorHandler = (statusCode: number, message: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (typeof message === "string") {
      res.status(statusCode).json({ success: false, error: message });
    } else {
      res
        .status(statusCode)
        .json({ success: false, error: "An error occurred" });
    }
  };
};
