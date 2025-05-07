import express from "express";
import { dislikeVideo, getUser, likeVideo, subscribeUser, unsubscribeUser } from "../controllers/user.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/find/:id", getUser );

router.put("/sub/:id",verifyToken, subscribeUser );

router.put("/unsub/:id", verifyToken, unsubscribeUser );

router.put("/like/:videoId",verifyToken, likeVideo );

router.put("/dislike/:videoId",verifyToken, dislikeVideo );

export default router;