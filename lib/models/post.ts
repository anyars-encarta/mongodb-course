import { model, models, Schema } from "mongoose";

interface PostParams {
    userId: string;
    title: string;
    desc: string;
    image: string;
    likes: number;
    comments: string[];
    createdAt: Date;
    updatedAt: Date;
}
const PostSchema = new Schema<PostParams>({
    userId: String,
    title: String,
    desc: String,
    image: String,
    likes: Number,
    comments: [String],
    createdAt: Date,
    updatedAt: Date
});

const Post = models?.Post || model<PostParams>("Post", PostSchema);

export default Post;