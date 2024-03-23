import PropTypes from "prop-types";
import icons from "../../assets/icons.svg";

export const ItemLocation = ({ location }) => {
  return (
    <>
      <svg className="w-[16px] h-[16px] fill-white stroke-black mr-1">
        <use href={`${icons}#icon-map-pin`} />
      </svg>
      <p className="text-sm font-normal text-[#101828]">
        {location.split(",")[1]}, {location.split(",")[0]}
      </p>
    </>
  );
};

ItemLocation.propTypes = {
  location: PropTypes.string.isRequired,
};
