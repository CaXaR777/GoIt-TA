import PropTypes from "prop-types";
export const ItemImg = ({ img, name }) => {
  return (
    <div className="w-[290px] h-[310px]   rounded-[10px] shrink-0 ">
      <img
        src={img}
        alt={name}
        className="h-full object-cover rounded-[10px] "
      />
    </div>
  );
};
ItemImg.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
