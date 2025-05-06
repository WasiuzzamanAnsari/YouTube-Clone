import express from "express";
import { addVideo, addVideos, updateVideo, removeVideo, getVideo} from "../controllers/video.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { uploadFiles } from "../middlewares/multerConfig.js";

const router = express.Router();

router.post("/",verifyToken, uploadFiles, addVideo);
router.post("/add", verifyToken, addVideos);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, removeVideo);
router.get("/find/:id", getVideo);

export default router;