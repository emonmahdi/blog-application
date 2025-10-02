import { PostModel, IPost } from "./post.model";
import { Types } from "mongoose";
import slugify from "../../utils/slugify";

export const createPost = async (
  title: string,
  content: string,
  authorId: Types.ObjectId,
  tags?: string[]
): Promise<IPost> => {
  const slug = slugify(title);
  const newPost = await PostModel.create({
    title,
    content,
    author: authorId,
    slug,
    tags,
    published: false
  });
  return newPost;
};

export const getAllPosts = async (): Promise<IPost[]> => {
  return PostModel.find({}).populate("author", "name email");
};

export const getPostBySlug = async (slug: string): Promise<IPost | null> => {
  return PostModel.findOne({ slug }).populate("author", "name email");
};

export const updatePost = async (
  slug: string,
  data: Partial<IPost>
): Promise<IPost | null> => {
  if (data.title) data.slug = slugify(data.title);
  return PostModel.findOneAndUpdate({ slug }, data, { new: true });
};

export const deletePost = async (slug: string): Promise<IPost | null> => {
  return PostModel.findOneAndDelete({ slug });
};
