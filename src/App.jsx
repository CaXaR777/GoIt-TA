import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { MainLayot } from "./components/MainLayout/MainLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayot />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
