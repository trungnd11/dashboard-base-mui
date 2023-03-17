import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const AppContainer = lazy(() => import("./layout/container/AppContainer"));
const Login = lazy(() => import("./pages/login/Login"));

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<AppContainer />} />
      </Routes>
    </Suspense>
  );
}

export default App;
