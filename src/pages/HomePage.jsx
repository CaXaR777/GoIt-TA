import { NavLink } from "react-router-dom";
import icons from "../assets/icons.svg";
import { GiCarWheel } from "react-icons/gi";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xxl font-bold ">Home</h2>
      <div className="relative">
        <svg className="w-[300px] h-[300px]">
          <use href={`${icons}#icon-van`} />
        </svg>
        <GiCarWheel className="animate-spin w-[60px] h-[60px] absolute bottom-[43px] left-[47px]" />
        <GiCarWheel className="animate-spin w-[60px] h-[60px] absolute  bottom-[43px] right-[30px]" />
      </div>

      <p className="text-gray-500 text-lg mb-[15px]">In Progress</p>
      <p className="text-gray-500 text-lg mb-[15px]">Waiting for offers</p>

      <NavLink
        to="/catalog"
        className="flex justify-center items-center w-[160px] h-[56px] rounded-[200px] bg-[#D84343] hover:bg-[#E44848] focus:bg-[#E44848] pointer text-white font-medium text-base tracking-[-0.01em]"
      >
        View Catalog
      </NavLink>
    </div>
  );
};

export default HomePage;
