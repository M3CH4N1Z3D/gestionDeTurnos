import { Router } from "express";
import {
  newUserController,
  getAllUsersController,
  getUserByIdController,
  loginUserController,
  logOutUserController,
} from "../controllers/userController";

const usersRouter: Router = Router();

usersRouter.get("/", getAllUsersController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register", newUserController);
usersRouter.post("/login", loginUserController);
usersRouter.post("/logout", logOutUserController);
usersRouter.put("/");
usersRouter.delete("/");

export default usersRouter;
