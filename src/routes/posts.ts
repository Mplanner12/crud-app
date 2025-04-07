import express from "express";
import Post from "../models/Post";
import { authenticate, AuthRequest } from "../middleware/auth";

const router = express.Router();

// Create
router.post("/", authenticate, async (req: AuthRequest, res) => {
  try {
    const post = await Post.create({ ...req.body, author: req.userId });
    res.status(201).json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
  }
});

// Read All
router.get("/", authenticate, async (_, res) => {
  try {
    const posts = await Post.find().populate("author", "username");
    res.json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: error.message });
  }
});

// Read One
router.get("/:id", authenticate, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username"
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching post", error: error.message });
  }
});

// Update
router.put("/:id", authenticate, async (req: AuthRequest, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id, author: req.userId },
      req.body,
      { new: true }
    );
    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or not authorized" });
    }
    res.json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating post", error: error.message });
  }
});

// Delete
router.delete("/:id", authenticate, async (req: AuthRequest, res) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      author: req.userId,
    });
    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or not authorized" });
    }
    res.status(200).json({ message: "Post deleted successfully" }); // Success message added
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
});

export default router;
