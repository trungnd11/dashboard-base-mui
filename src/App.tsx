import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Authenticate } from "./enum/AuthorEnum";
import { getCookie } from "./helpper/cookie";
import AuthorizedRouter from "./routers/AuthorizedRouter";
import ProtectedRouter from "./routers/ProtectedRouter";
import { getAuthorStore, getLogin, logout } from "./store/author/author";
import { useAppDispatch, useAppSelector } from "./store/reduxHook";

const AppContainer = lazy(async () => await import("src/layout/container/AppContainer"));
const Login = lazy(async () => await import("src/pages/login/Login"));

function App() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const author = getCookie(Authenticate.AUTH);
  const { isAuthorized } = useAppSelector(getAuthorStore);

  useEffect(() => {
    author ? dispatch(getLogin(author)) : dispatch(logout());
  }, [pathname]);

  useEffect(() => {
    isAuthorized ? <Navigate to="/" /> : <Navigate to="/login" />;
  }, [isAuthorized]);

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRouter>
              <Login />
            </ProtectedRouter>
          }
        />
        <Route
          path="*"
          element={
            <AuthorizedRouter>
              <AppContainer />
            </AuthorizedRouter>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
