import Video from "../models/Video.js";
// import User from "../models/User.js";

export const addVideo = async (req, res) => {
    try {
      if (!req.files || !req.files.videoFile || !req.files.imgFile) {
        return res.status(400).json({ error: "Please upload both video and image files." });
      }
  
      const newVideo = new Video({
        userId: req.user.id,
        title: req.body.title,
        desc: req.body.desc,
        tags: req.body.tags.split(","),
        videoUrl: `/uploads/${req.files.videoFile[0].filename}`,
        imgUrl: `/uploads/${req.files.imgFile[0].filename}`,
      });
  
      await newVideo.save();
      res.status(201).json({ message: "Video uploaded successfully", video: newVideo });
    } catch (error) {
      console.error("Error uploading video:", error);
      res.status(500).json({ error: "Something went wrong. Please try again later." });
    }
  };



export const addVideos = async (req, res) => {
try {
    const { title, desc, tags, videoUrl, imgUrl } = req.body;
  
    if (!title || !desc || !videoUrl || !imgUrl) {
    return res.status(400).json({ error: "All fields are required." });
    }
  
    const newVideo = new Video({
    userId: req.user.id,
    title,
    desc,
    tags: Array.isArray(tags) ? tags : tags.split(","),
    videoUrl,
    imgUrl,
    });
  
    await newVideo.save();
    res.status(201).json({ message: "Video uploaded successfully", video: newVideo });
} catch (error) {
    console.error("Error uploading video:", error);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
};