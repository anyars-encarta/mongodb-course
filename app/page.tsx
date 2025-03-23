"use client";

import { updateUserEmail } from "@/lib/actions/user.action";

const Home = () => {
  return (
    <>
      <h1>The ID of the User is:</h1>
      <h1>The ID of the Post is:</h1>

      <button type="button" onClick={() => updateUserEmail("67dea876568cf8086cfe75bd", "encartia@encarta.com")}>Run</button>
    </>
  );
};

export default Home;