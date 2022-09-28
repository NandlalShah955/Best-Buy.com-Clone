import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

{
  /* <PrivateRoute>
  <Component/> -> children
</PrivateRoute> */
}

function PrivateRoute({ children }) {
  // logic to check if a user is auth
const {auth}=useContext(AppContext)
  if (auth===false) {
    return <Navigate to="/signin" />;
  }

  return children;
}

export default PrivateRoute;
