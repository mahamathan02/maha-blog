import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxRvOnqS-cshHCStXsNjUrvKIjCCa8BZQ",
  authDomain: "maha-blog.firebaseapp.com",
  projectId: "maha-blog",
  storageBucket: "maha-blog.appspot.com",
  messagingSenderId: "885846513094",
  appId: "1:885846513094:web:1b1513cc24c9c939cccec7",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

export { storage, auth };
