import express from "express";
import { addVideo, addVideos, updateVideo, removeVideo, getVideo, getUserVideos, subsVideo, getVideoByTag, searchVideo} from "../controllers/video.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { uploadFiles } from "../middlewares/multerConfig.js";

const router = express.Router();

router.post("/",verifyToken, uploadFiles, addVideo);
router.post("/add", verifyToken, addVideos);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, removeVideo);
router.get("/find/:id", getVideo);
router.get("/user/:userId", getUserVideos);
router.get("/sub", verifyToken, subsVideo);
router.get("/tags", getVideoByTag);
router.get("/search",  searchVideo);

export default router;