import { Model, model, models, Schema } from "mongoose";

export interface BlogDocument {
  _id: string;
  title: string;
  text: string;
  createdAt: Date;
}

const blogSchema = new Schema<BlogDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog as Model<BlogDocument>;
