import { Request, Response, NextFunction } from "express";
import { errorHandler } from "../utils/errorHandler";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const salt = process.env.SALT;
const key = process.env.JWT_KEY;
const prisma = new PrismaClient();

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, firstName, lastName } = req.body;

  try {
    const existingUser = await prisma.user.findFirst({ where: { username } });
    if (existingUser) {
      return next(errorHandler(400, "Username already exists"));
    }

    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    const token = jwt.sign({ userId: newUser.id }, key || "", {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Error signing up:", error);
    next(errorHandler(500, "Internal server error"));
  }
};
export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user)
      return res
        .status(404)
        .json({ message: "User doesnt exist or invalid Credentials" });
    const valid_pass = bcrypt.compareSync(password, user.password);
    if (valid_pass) {
      const token = jwt.sign({ userId: user.id }, key || "", {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "user logged in", token });
    } else {
      return res
        .status(401)
        .json({ message: "User doesnt exist or invalid Credentials" });
    }
  } catch (error: any) {
    console.log(error.message);
    next(errorHandler(500, error.message));
  }
};
