import { model, models, Schema, Types } from "mongoose";

interface PostParams {
    userId: Types.ObjectId;
    title: string;
    desc: string;
    image: string;
    likes: number;
    comments: string[];
    createdAt: Date;
    updatedAt: Date;
}
const PostSchema = new Schema<PostParams>(
    {
    userId: { type: Schema.Types.ObjectId, ref: "User"},
    title: String,
    desc: String,
    image: String,
    likes: Number,
    comments: [String],
    createdAt: Date,
    updatedAt: Date
},
    { timestamps: true }
);

const Post = models?.Post || model<PostParams>("Post", PostSchema);

export default Post;