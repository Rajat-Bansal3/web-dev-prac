import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../utils/errorHandler";

const prisma = new PrismaClient();

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.cookies.userId;
  if (!id) return next(errorHandler(401, "not Authenticated"));
  try {
    const user = await prisma.user.findUnique(id);
    if (!user) return next(errorHandler(404, "not Authenticated"));

    const todos = await prisma.user.findMany({
      where: { id },
      include: {
        todos: true,
      },
    });
    res.status(200).json({ message: "success", todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    next(errorHandler(500, "Internal server error"));
  }
};
export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.cookies.userId;
  const todoId = req.body.id;
  if (!id || !todoId) return next(errorHandler(401, "not Authenticated"));

  try {
    const user = await prisma.user.findUnique(id);
    if (!user) return next(errorHandler(404, "not Authenticated"));

    const todos = await prisma.user.findUnique({
      where: { id },
      include: {
        todos: {
          where: {
            id: todoId,
          },
        },
      },
    });
    res.status(200).json({ message: "success", todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    next(errorHandler(500, "Internal server error"));
  }
};
export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, creator, userId } = req.body;
  try {
    const todo = await prisma.todo.create({
      data: { title, description, creator, userId },
    });
    if (!todo)
      return next(errorHandler(400, "something went wrong todo not created"));

    res.status(200).json({ message: "successfull" });
  } catch (error) {
    console.error("Error creating todos:", error);
    next(errorHandler(500, "Internal server error"));
  }
};

export const mark = async (req: Request, res: Response, next: NextFunction) => {
  const todoId = req.body.id;
  const state = req.body.marker;
  await prisma.todo.update({ where: { id: todoId }, data: { done: state } });
};
export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const todoId = req.body.id;
  const { title, description, creator, userId } = req.body;
  await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      title,
      description,
      creator,
      userId,
    },
  });
};
