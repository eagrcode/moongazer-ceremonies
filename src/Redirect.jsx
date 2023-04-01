import { Navigate } from "react-router-dom";

function Redirect() {
  return <Navigate to="/" replace={true} />;
}

export default Redirect;
