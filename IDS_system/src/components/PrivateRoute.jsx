import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  let user = auth.currentUser;

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
