import icons from "../../assets/icons.svg";
import PropTypes from "prop-types";
export const ItemRating = ({ rating, reviews }) => {
  return (
    <>
      <svg className="w-[16px] h-[16px] mr-1">
        <use href={`${icons}#icon-rating`} />
      </svg>
      <p className="underline underline-offset-4 text-sm font-normal mr-4 text-[#101828]">
        {rating}({reviews.length} Reviews)
      </p>
    </>
  );
};
ItemRating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
};
