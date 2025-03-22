import { createPost, getAllPosts } from "@/lib/actions/post.action";
import { createMultipleUsers, createUser, getAllUsers, getSingleUser } from "@/lib/actions/user.action";

const Home = async () => {
  const users = await getAllUsers();

  const user = await getSingleUser("Awal")

  console.log("The single user is: ", user);

  const moreUsers = [
    {
      name: "Anyars",
      email: "anyars@example.com",
      dob: new Date("1990-01-01"),
      address: "123 Main St, New York, NY 10030",
      phone: "123-456-7890",
      password: "password",
    },
    {
      name: "Sadia",
      email: "sadia@example.com",
      dob: new Date("1989-03-04"),
      address: "123 Main St, New York, NY 10030",
      phone: "123-456-7890",
      password: "password",
    },
    {
      name: "Salaamatu",
      email: "salaamatu@example.com",
      dob: new Date("2017-12-12"),
      address: "123 Main St, New York, NY 10030",
      phone: "123-456-7890",
      password: "password",
    },
    {
      name: "Awal",
      email: "awal@example.com",
      dob: new Date("1983-01-01"),
      address: "123 Main St, New York, NY 10030",
      phone: "123-456-7890",
      password: "password",
    },
  ];

  if (users.length === 0) {
    await createMultipleUsers(moreUsers);
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
      comments: ["Nice post!", "interesting indeed", "Add more posts"],
    });
  }

  console.log(
    `I found ${posts.length} ${posts.length === 1 ? "Post" : "Posts"}: `,
    posts
  );

  return (
    <>
      <h1>The ID of the User is:</h1>
      <h1>The ID of the Post is:</h1>
    </>
  );
};

export default Home;
