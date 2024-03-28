import {
  GoogleAuthProvider,
  // signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../config/firebase.config";

const Authentication = () => {
  const provider = new GoogleAuthProvider();
  const handleClick = async () => {
    // console.log("clicked");
    await signInWithRedirect(auth, provider)
      .then((usercred) => {
        console.log(usercred);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-full overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-blue-700 font-semibold text-2xl md:text-3xl">
        welcome back
      </h2>
      <p className=" text-base md:text-lg text-neutral-700 ">
        Authenticate yourself by following
      </p>
      <div
        className="flex items-center gap-x-3 border border-neutral-300 w-[90%] justify-center md:w-auto  px-12 py-3 rounded-md bg-neutral-200 opacity-70 hover:opacity-100 hover:shadow-md transition"
        onClick={handleClick}
      >
        <FcGoogle />
        <p>sign-in with google</p>
      </div>
    </div>
  );
};

export default Authentication;
