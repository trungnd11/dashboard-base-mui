import { lazy, Suspense, useEffect } from "react";
import { QueryClientProvider } from "react-query";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import queryClient from "./config/queryClient";
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
  const { isAuthentication } = useAppSelector(getAuthorStore);

  useEffect(() => {
    author ? dispatch(getLogin(author)) : dispatch(logout());
  }, [pathname]);

  useEffect(() => {
    isAuthentication ? <Navigate to="/" /> : <Navigate to="/login" />;
  }, [isAuthentication]);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
