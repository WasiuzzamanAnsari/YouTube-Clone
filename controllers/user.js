import User from "../models/User.js";
import Video from "../models/Video.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const subscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscription successful!");
  } catch (err) {
    next(err);
  }
};

export const unsubscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("Unsubscription successful.");
  } catch (err) {
    next(err);
  }
};

export const likeVideo = async (req, res, next) => {
  const userId = req.user.id;
  const videoId = req.params.videoId;
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      videoId,
      {
        $addToSet: { likes: userId },
        $pull: { dislikes: userId },
      },
      { new: true }
    );
    res.status(200).json(updatedVideo);
  } catch (err) {
    next(err);
  }
};

export const dislikeVideo = async (req, res, next) => {
  const userId = req.user.id;
  const videoId = req.params.videoId;
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      videoId,
      {
        $addToSet: { dislikes: userId },
        $pull: { likes: userId },
      },
      { new: true }
    );
    res.status(200).json(updatedVideo);
  } catch (err) {
    next(err);
  }
};
