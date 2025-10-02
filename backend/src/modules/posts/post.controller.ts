import { Request, Response, NextFunction } from "express";
import * as postService from "./post.service";

export const createPostHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content, tags } = req.body;
    const authorId = req.user?.id; // auth middleware থেকে আসবে
    if (!authorId) return res.status(401).json({ message: "Unauthorized" });

    const post = await postService.createPost(title, content, authorId, tags);
    res.status(201).json({ message: "Post created", data: post });
  } catch (error) {
    next(error);
  }
};

export const getAllPostsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await postService.getAllPosts();
    res.json({ data: posts });
  } catch (error) {
    next(error);
  }
};

export const getPostBySlugHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await postService.getPostBySlug(req.params.slug);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ data: post });
  } catch (error) {
    next(error);
  }
};

export const updatePostHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await postService.updatePost(req.params.slug, req.body);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post updated", data: post });
  } catch (error) {
    next(error);
  }
};

export const deletePostHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await postService.deletePost(req.params.slug);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (error) {
    next(error);
  }
};
