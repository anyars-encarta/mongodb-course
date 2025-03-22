import dbConnect from "../db";
import Post from "../models/post";

interface PostParams {
    userId: string;
    title: string;
    desc: string;
    image: string;
    likes: number;
    comments: string[];
};

export async function createPost({
  userId,
  title,
  desc,
  image,
  likes,
  comments,
}: PostParams) {
  await dbConnect();

  const post = await Post.create({
    userId,
    title,
    desc,
    image,
    likes,
    comments,
  });

  return post;
}

export async function getAllPosts() {
    await dbConnect();

    const posts = await Post.find();
    return posts;
}
