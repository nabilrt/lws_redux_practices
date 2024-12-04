import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavBar from "./Navbar";
export default function PrivateRoute({ children }) {
  const isLoggedIn = useAuth();

  return isLoggedIn ? (
    <>
      <NavBar />
      {children}
    </>
  ) : (
    <Navigate to="/" />
  );
}