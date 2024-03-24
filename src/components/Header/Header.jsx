import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="bg-[#475467]">
        <div className="h-[72px] flex justify-center  items-center container">
          <nav className="flex gap-[50px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                clsx(
                  "text-xl text-white font-light py-[4px] px-[20px] rounded-[10px]  border-[2px]",
                  isActive
                    ? " rounded-[200px]  border-[2px]  border-[#E44848]"
                    : "border-transparent"
                )
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/catalog"}
              className={({ isActive }) =>
                clsx(
                  "text-xl text-white font-light py-[4px] px-[20px] rounded-[10px]  border-[2px]",
                  isActive
                    ? " rounded-[200px]  border-[2px]  border-[#E44848]"
                    : "border-transparent"
                )
              }
            >
              Catalog
            </NavLink>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) =>
                clsx(
                  "text-xl text-white font-light py-[4px] px-[20px] rounded-[10px]  border-[2px]",
                  isActive
                    ? " rounded-[200px]  border-[2px]  border-[#E44848]"
                    : "border-transparent"
                )
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};
