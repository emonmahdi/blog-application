import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  slug: string;
  tags?: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    published: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const PostModel = mongoose.model<IPost>("Post", PostSchema);
