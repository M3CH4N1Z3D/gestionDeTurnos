import { Router } from "express";
import usersRouter from "./usersRouter";
import bookingsRouter from "./bookingsRouter";

const indexRouter: Router = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/booking", bookingsRouter);

export default indexRouter;
