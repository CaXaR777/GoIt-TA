import icons from "../../assets/icons.svg";
import { FaWind } from "react-icons/fa";
import PropTypes from "prop-types";

export const Features = ({ feature, maxFeature }) => {
  const renderIcon = (item) => {
    if (item === "AC") {
      return <FaWind className="w-[20px] h-[20px] mr-1" />;
    } else {
      return (
        <svg className="w-[20px] h-[20px] mr-2 ">
          <use href={`${icons}#icon-${item}`} />
        </svg>
      );
    }
  };
  return (
    <>
      <ul className="mb-6 flex gap-[8px] flex-wrap">
        {Object.keys(feature).map(
          (item, index) =>
            index < maxFeature && (
              <li
                key={item}
                className="h-[44px] rounded-[100px] py-[12px] px-[18px] bg-[#f2f4f7] inline-flex items-center"
              >
                {renderIcon(item)}
                <span className="text-sm font-medium text-[#101828] capitalize">
                  {feature[item]}
                </span>
              </li>
            )
        )}
      </ul>
    </>
  );
};
Features.propTypes = {
  feature: PropTypes.object.isRequired,
  maxFeature: PropTypes.number.isRequired,
};
