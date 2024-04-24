import { Router } from "express";

const router = Router()

const authController = require("../controller/auth.controller.ts")


router.post("/sign-up" , authController.signUp)
router.post("/sign-in" , authController.signIn)
export default router