import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/Home";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const AppRoutes = () => {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route
          path=""
          element={
            <Layout showHero={true}>
              {" "}
              <Home />{" "}
            </Layout>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="user-profile"
            element={
              <Layout>
                {" "}
                <UserProfilePage />{" "}
              </Layout>
            }
          />
        </Route>
        <Route path="auth-callback" element={<AuthCallbackPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
