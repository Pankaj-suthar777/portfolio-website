import { Model, model, models, Schema, Types } from "mongoose";

export interface BlogViewDocument {
  _id: string;
  blogId: Types.ObjectId;
  ipAddress: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const blogViewSchema = new Schema<BlogViewDocument>(
  {
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
      index: true,
    },
    ipAddress: {
      type: String,
      required: true,
      trim: true,
    },
    userAgent: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

blogViewSchema.index({ blogId: 1, createdAt: -1 });
blogViewSchema.index({ blogId: 1, ipAddress: 1, createdAt: -1 });

const BlogView = models.BlogView || model("BlogView", blogViewSchema);

export default BlogView as Model<BlogViewDocument>;
