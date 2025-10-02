import { Router } from "express";
import {
  createPostHandler,
  getAllPostsHandler,
  getPostBySlugHandler,
  updatePostHandler,
  deletePostHandler
} from "./post.controller"; 
import authMiddleware from "../../middlewares/auth.middleware";

const router = Router();

router.get("/", getAllPostsHandler);
router.get("/:slug", getPostBySlugHandler);

router.post("/", authMiddleware, createPostHandler);
router.put("/:slug", authMiddleware, updatePostHandler);
router.delete("/:slug", authMiddleware, deletePostHandler);

export default router;
