import express from "express";
import {addNewComment} from "../controllers/comment.js";
import { verifyToken } from "../middlewares/verifyToken.js";


const router = express.Router();

router.post("/", verifyToken, addNewComment);
router.delete("/:id", verifyToken)

export default router;