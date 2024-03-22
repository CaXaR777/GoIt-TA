import React from "react";

export const CatalogItem = ({ item }) => {
  return (
    <li className="border border-[rgba(16, 24, 40, 0.2)] rounded-[20px] p-6 w-[888px] h-[358px] flex gap-6 mb-[32px]">
      <div className="catalog-item">
        <h2 className="catalog-item__name">{item.name}</h2>
        <p className="catalog-item__price">Price: ${item.price}</p>
        <p className="catalog-item__location">Location: {item.location}</p>
        <p className="catalog-item__description">{item.description}</p>
        <div className="catalog-item__details">
          <h3>Details:</h3>
          <ul>
            <li>Air Conditioner: {item.details.airConditioner}</li>
            <li>Bathroom: {item.details.bathroom}</li>
            <li>Kitchen: {item.details.kitchen}</li>
            {/* Add more details here */}
          </ul>
        </div>
        <div className="catalog-item__gallery">
          <h3>Gallery:</h3>
          <div className="gallery-images">
            {item.gallery.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="catalog-item__reviews">
          <h3>Reviews:</h3>
          {item.reviews.map((review, index) => (
            <div key={index} className="review">
              <p>{review.comment}</p>
              <p>Reviewer: {review.reviewer_name}</p>
              <p>Rating: {review.reviewer_rating}</p>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};
