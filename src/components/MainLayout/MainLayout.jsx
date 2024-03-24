import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";
import { ToastContainer } from "react-toastify";
export const MainLayot = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 99999 }}
      />
    </>
  );
};
