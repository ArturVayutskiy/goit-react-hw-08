import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";

import Layout from "../Layout/Layout";

import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p className={css.text}>Refreshing user ... please wait ⌛</p>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
