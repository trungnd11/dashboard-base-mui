import { Navigate } from "react-router-dom";
import { Authenticate } from "src/enum/AuthorEnum";
import { getCookie } from "src/helpper/cookie";

export default function AuthorizedRouter(props: { children: JSX.Element }) {
  const { children } = props;
  const auth = getCookie(Authenticate.AUTH);

  if (auth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
