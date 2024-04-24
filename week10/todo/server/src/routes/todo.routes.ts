import { Router } from "express";

const router = Router()

const todoController = require( "../controller/todo.controller.ts");


router.get("/sign-up" , todoController.getTodos)
// router.get("/sign-in" , todoController.getTodo)
export default router