import Comment from "../models/Comment.js";
import { createError } from "../error.js";

export const addNewComment = async (req, res, next) => {
    if (!req.user) return next(createError(401, "You must be logged in to comment."));
    const newComment = new Comment({ ...req.body, videoId: String(req.body.videoId), userId: req.user.id });
    try {
      const savedComment = await newComment.save();
      res.status(200).json(savedComment);
    } catch (err) {
      next(err);
    }
  };
  