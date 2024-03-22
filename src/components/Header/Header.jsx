import { NavLink } from "react-router-dom";
import icons from "../../assets/icons.svg";

export const Header = () => {
  return (
    <div className="bg-blue-600 text-amber-300">
      <NavLink
        exact="true"
        to="/"
        activeclassname="bg-red-600"
        className="text-white px-3 py-2 inline-block "
      >
        <svg className="w-[25px] h-[25px]  fill-black ">
          <use href={`${icons}#icon-petrol`} />
        </svg>
        Home
      </NavLink>
      <NavLink
        exact="true"
        to="/catalog"
        activeclassname="bg-red-600"
        className="text-white px-3 py-2 inline-block "
      >
        Catalog
      </NavLink>
      <NavLink
        exact="true"
        to="/favorites"
        activeclassname="bg-red-600"
        className="text-white px-3 py-2 inline-block  "
      >
        Favorites
      </NavLink>
    </div>
  );
};
