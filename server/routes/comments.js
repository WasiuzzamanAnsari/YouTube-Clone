import express from "express";
import {addNewComment, removeComment, getAllComments} from "../controllers/comment.js";
import { verifyToken } from "../middlewares/verifyToken.js";


const router = express.Router();

router.post("/", verifyToken, addNewComment);
router.delete("/:id", verifyToken, removeComment);
router.get("/:videoId", getAllComments);

export default router;