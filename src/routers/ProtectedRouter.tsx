import { Navigate, useLocation } from "react-router-dom";
import { Authenticate } from "src/enum/AuthorEnum";
import { getCookie } from "src/helpper/cookie";

export default function ProtectedRouter(props: { children: JSX.Element }) {
  const { children } = props;
  const location = useLocation();
  const auth = getCookie(Authenticate.AUTH);

  if (!auth) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} />;
  }
};
