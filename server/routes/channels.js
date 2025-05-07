import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { createNewChannel, getChannel } from "../controllers/channel.js";

const router = express.Router();

router.post("/", verifyToken, createNewChannel);

router.get("/:userId", getChannel);

export default router;