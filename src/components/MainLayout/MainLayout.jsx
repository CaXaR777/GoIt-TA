import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";

export const MainLayot = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
