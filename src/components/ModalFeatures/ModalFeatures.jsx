import { Features } from "../Features/Features";
import PropTypes from "prop-types";

export const ModalFeatures = ({ item }) => {
  const addSpaces = (str) => {
    return str.replace(/(\d)([a-zA-Z])/g, "$1 $2");
  };
  return (
    <div className="w-[430px] h-[532px] flex flex-col mt-[44px]">
      <Features feature={item.feature} maxFeature={12} />
      <div className="w-[430px] font-semibold text-lg mt-[20px] border-b border-gray-300">
        <p className="pb-[24px]">Vehicle details</p>
      </div>
      <ul className="mt-[24px] text-midl font-medium text-[#101828]">
        <li className="flex justify-between mb-[14px]">
          <p>Form</p>
          <span>{addSpaces(item.form)}</span>
        </li>
        <li className="flex justify-between mb-[14px]">
          <p>Length</p>
          <span>{addSpaces(item.length)}</span>
        </li>
        <li className="flex justify-between mb-[14px]">
          <p>Width</p>
          <span>{addSpaces(item.width)}</span>
        </li>
        <li className="flex justify-between mb-[14px]">
          <p>Height</p>
          <span>{addSpaces(item.height)}</span>
        </li>
        <li className="flex justify-between mb-[14px]">
          <p>Tank</p>
          <span>{addSpaces(item.tank)}</span>
        </li>
        <li className="flex justify-between">
          <p>Consumption</p>
          <span>{item.consumption}</span>
        </li>
      </ul>
    </div>
  );
};
ModalFeatures.propTypes = {
  item: PropTypes.shape({
    form: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    tank: PropTypes.string.isRequired,
    consumption: PropTypes.string.isRequired,
    feature: PropTypes.object.isRequired,
  }).isRequired,
};
