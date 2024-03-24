import { useEffect, useState } from "react";
import icons from "../../assets/icons.svg";
import { ItemRating } from "../ItemRating/ItemRating";
import { ItemLocation } from "../ItemLocation/ItemLocation";
import { ItemImg } from "../ItemImg/ItemImg";
import PropTypes from "prop-types";
import { ModalFeatures } from "../ModalFeatures/ModalFeatures";
import { BookForm } from "../BookForm/BookForm";
import { ModalReviews } from "../ModalReviews/ModalReviews";

const TabIndicator = ({ activeTab }) => (
  <div
    className={`absolute -bottom-[3px] bg-[#E44848] h-[5px] transition-all duration-300 ${
      activeTab ? "" : "hidden"
    }`}
    style={{ width: activeTab === "features" ? "101px" : "85px" }}
  />
);

export const Modal = ({ isVisible, onClose, item }) => {
  const [activeTab, setActiveTab] = useState("features");
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = isVisible ? "hidden" : "auto";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, isVisible]);

  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center ">
      <div
        className="absolute inset-0 bg-gray-500 opacity-40 "
        onClick={() => onClose()}
      />
      <div className="relative bg-white p-8 rounded-[20px] w-[972px] h-[720px] overflow-auto ">
        <button
          className="absolute top-4 right-4 w-8 h-8"
          onClick={() => onClose()}
        >
          <svg className="w-[32px] h-[32px] ">
            <use href={`${icons}#icon-close`} />
          </svg>
        </button>

        <div className="mb-[24px]">
          <h3 className="font-semibold text-sxl truncate w-[350px] text-2xl text-[#101828] inline-block">
            {item.name}
          </h3>
          <div className="flex items-center mb-6">
            <ItemRating rating={item.rating} reviews={item.reviews} />
            <ItemLocation location={item.location} />
          </div>
          <p className="font-normal text-xl text-[#101828] inline-block pr-3">
            €{item.price}.00
          </p>
        </div>

        <div className="flex gap-4 mb-[24px]">
          <ItemImg img={item?.gallery[0]} name={item.name} />
          <ItemImg img={item?.gallery[1]} name={item.name} />
          <ItemImg img={item?.gallery[2]} name={item.name} />
        </div>
        <p className="w-[902px]  text-base text-[#475467] mb-6 ">
          {item.description}
        </p>

        <div className="flex flex-col">
          <div className=" w-[902px] pb-[24px] relative  border-b border-gray-300">
            <button
              className={`w-[85px]   font-semibold text-lg mr-[40px] `}
              onClick={() => setActiveTab("features")}
            >
              <TabIndicator activeTab={activeTab === "features"} />
              Features
            </button>
            <button
              className={`w-[81px]  font-semibold text-lg`}
              onClick={() => setActiveTab("reviews")}
            >
              <TabIndicator activeTab={activeTab === "reviews"} />
              Reviews
            </button>
          </div>
          <div className="flex">
            {activeTab === "features" && <ModalFeatures item={item} />}
            {activeTab === "reviews" && <ModalReviews item={item} />}
            <BookForm item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    favorite: PropTypes.bool,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gallery: PropTypes.array.isRequired,
    feature: PropTypes.object.isRequired,
  }).isRequired,
};
