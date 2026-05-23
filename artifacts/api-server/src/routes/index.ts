import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import postsRouter from "./posts";
import campaignsRouter from "./campaigns";
import generateRouter from "./generate";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(postsRouter);
router.use(campaignsRouter);
router.use(generateRouter);

export default router;
