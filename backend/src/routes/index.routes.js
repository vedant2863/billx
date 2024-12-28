import { Router } from "express";
import userRouter from "./user.routes.js";
import adminRouter from "./admin.routes.js";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/admin", adminRouter);

export default indexRouter;