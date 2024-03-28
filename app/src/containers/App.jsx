import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Authentication,
  DashboardBlogs,
  DashboardLayout,
  DashboardUser,
  DashboardCreate,
  Home,
} from "../pages";
import { Blogs } from "../containers";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useDispatch } from "react-redux";
import { saveUser } from "../context/reducers/userReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log(userCred.providerData[0]);
        dispatch(saveUser(userCred.providerData[0]));
      }
    });
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <Routes>
        <Route path="/" element={<Home />} exact>
          <Route path=":blogId" element={<Blogs />} />
        </Route>

        <Route path="/auth" element={<Authentication />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardBlogs />} />
          <Route path="users" element={<DashboardUser />} />
          <Route path="create" element={<DashboardCreate />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
