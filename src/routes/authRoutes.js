import { celebrate } from "celebrate";
import { Router } from "express";
import { loginUserSchema, registerUserSchema } from "../validations/authValidation.js";
import { loginUser, logoutUser, refreshUserSession, registerUser } from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/auth/register", celebrate(registerUserSchema), registerUser);

authRouter.post("/auth/login", celebrate(loginUserSchema), loginUser);

authRouter.post("/auth/refresh", refreshUserSession);

authRouter.post('/auth/logout', logoutUser);

export default authRouter;
