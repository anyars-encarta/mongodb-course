import { createPost, getAllPosts } from "@/lib/actions/post.action";
import { createUser, getAllUsers } from "@/lib/actions/user.action";

const Home = async () => {
  const users = await getAllUsers();

  if (users.length === 0) {
    await createUser({
      name: "Anyars",
      email: "anyars@example.com",
      dob: new Date("1990-01-01"),
      address: "123 Main St, New York, NY 10030",
      phone: "123-456-7890",
      password: "password",
    });
  }

  console.log(
    `I found ${users.length} ${users.length === 1 ? "User" : "Users"}: `,
    users
  );

  const posts = await getAllPosts();

  if (posts.length === 0) {
    await createPost({
      userId: "1234567890",
      title: "Hello World!",
      desc: "This is my first post",
      image: "https://via.placeholder.com/150",
      likes: 23,
      comments: ['Nice post!', 'interesting indeed', 'Add more posts'],
    })
  }

  console.log(
    `I found ${posts.length} ${posts.length === 1 ? "Post" : "Posts"}: `,
    posts);

  return <h1>Hello World!</h1>;
};

export default Home;
