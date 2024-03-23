import icons from "../../assets/icons.svg";

export const ModalReviews = ({ item }) => {
  return (
    <div className="w-[430px] h-[532px] flex flex-col mt-[44px]">
      <ul>
        {item.reviews.map((review, index) => (
          <li key={index} className="flex flex-col mb-[24px]">
            <div className="flex  mb-[16px]">
              <span className=" mr-[16px] w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#F2F4F7] text-[#E44848] font-semibold text-sxl">
                {review.reviewer_name[0]}
              </span>
              <div className="flex flex-col justify-center">
                <span className="font-medium">{review.reviewer_name}</span>
                <div className="flex mt-[4px]">
                  {[...Array(review.reviewer_rating)].map((_, i) => (
                    <svg key={i} className="w-[16px] h-[16px] mr-[2px]">
                      <use href={`${icons}#icon-rating`} />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-normal text-[#475467] text-base">
              {review.comment}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
