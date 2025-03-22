import dbConnect from "../db";
import User from "../models/user";

interface UserProps {
  name: string;
  email: string;
  dob: Date;
  address: string;
  phone: string;
  password: string;
}

export async function createUser({
  name,
  email,
  dob,
  address,
  phone,
  password,
}: UserProps) {
  await dbConnect();

  const user = await User.create({
    name,
    email,
    dob,
    address,
    phone,
    password,
  });

  return user;
}

export async function getAllUsers() {
  await dbConnect();

  const users = await User.find();
  return users;
}

export async function getSingleUser(name: string) {
  await dbConnect();

  const user = await User.find({ name }, "name email address");

  return user;
}

export async function createMultipleUsers(users: UserProps[]) {
  await dbConnect();

  const createdUsers = await User.create(users);
  return createdUsers;
}
