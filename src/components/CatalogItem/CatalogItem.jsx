import icons from "../../assets/icons.svg";
import { ItemImg } from "../ItemImg/ItemImg";
import { ItemRating } from "../ItemRating/ItemRating";
import { ItemLocation } from "../ItemLocation/ItemLocation";
import { Features } from "../Features/Features";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../redux/CarCatalog/slice";
import { selectFavorites } from "../../redux/CarCatalog/selectors";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export const CatalogItem = ({ item }) => {
  const [showModal, setShowmodal] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const handleToggleFavorite = () => {
    dispatch(addToFavorites(item));
  };

  return (
    <li className="border border-[rgba(16, 24, 40, 0.2)] rounded-[20px] p-6 w-[888px] h-[358px] flex gap-6 mb-[32px]">
      <ItemImg img={item?.gallery[0]} name={item.name} />
      <div className="">
        <div className="flex justify-between mb-2">
          <h2 className="font-semibold truncate w-[350px] text-xl text-[#101828] inline-block">
            {item.name}
          </h2>
          <div className="flex ">
            <p className="font-semibold text-xl text-[#101828] inline-block pr-3">
              €{item.price}.00
            </p>
            <button className="p-0" onClick={handleToggleFavorite}>
              <svg className="w-[24px] h-[24px] ">
                <use
                  href={
                    favorites.some((favItem) => favItem._id === item._id)
                      ? `${icons}#icon-love`
                      : `${icons}#icon-n-love`
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <ItemRating rating={item.rating} reviews={item.reviews} />
          <ItemLocation location={item.location} />
        </div>
        <p className="w-[525px] text-base text-[#475467] mb-6 truncate">
          {item.description}
        </p>
        <Features feature={item.feature} maxFeature={6} />
        <button
          className="w-[156px] h-[56px] rounded-[200px] bg-[#D84343] hover:bg-[#E44848] focus:bg-[#E44848] text-white font-medium text-base tracking-[-0.01em]"
          onClick={() => setShowmodal(true)}
        >
          Show more
        </button>
        <Modal
          item={item}
          isVisible={showModal}
          onClose={() => setShowmodal(false)}
        />
      </div>
    </li>
  );
};

CatalogItem.propTypes = {
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
