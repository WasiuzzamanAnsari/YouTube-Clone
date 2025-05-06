import express from "express";
import { addVideo, addVideos } from "../controllers/video.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { uploadFiles } from "../middlewares/multerConfig.js";

const router = express.Router();

router.post("/",verifyToken, uploadFiles, addVideo);
router.post("/add", verifyToken, addVideos);

export default router;