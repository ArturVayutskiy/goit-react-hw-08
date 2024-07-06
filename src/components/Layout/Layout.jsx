import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <Toaster position="top-center" />
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    </>
  );
}
