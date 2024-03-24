import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/CarCatalog/operations";
import {
  selectCurrentPage,
  selectFeatures,
  selectFilter,
  selectIsLoading,
  selectItemsPerPage,
} from "../../redux/CarCatalog/selectors";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { setCurrentPage } from "../../redux/CarCatalog/slice";

export const CatalogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(fetchCatalog());
  }, [dispatch]);
  const catalog = useSelector(selectFeatures);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const filter = useSelector(selectFilter);
  //  const currentItems = useSelector(selectCurrentItems);
  function compareLocations(location1, location2) {
    const words1 = new Set(
      location1.toLowerCase().replace(/\s/g, "").split(",")
    );
    const words2 = new Set(
      location2.toLowerCase().replace(/\s/g, "").split(",")
    );
    return (
      [...words1].some((word) => words2.has(word)) ||
      [...words2].some((word) => words1.has(word))
    );
  }

  const filteredCatalog = catalog.filter((item) => {
    if (filter.location && !compareLocations(item.location, filter.location)) {
      return false;
    }

    if (filter.vehicleType && item.form !== filter.vehicleType) {
      return false;
    }

    if (filter.equipment.length > 0) {
      for (const feature of filter.equipment) {
        if (feature === "TV") {
          return item.details[feature] > 0;
        } else {
          if (item.feature[feature] === undefined) {
            return false;
          }
        }
      }
    }

    return true;
  });
  const handleLoadMore = () => {
    console.log(filter);

    dispatch(setCurrentPage(currentPage + 1));
    dispatch(fetchCatalog());
  };
  const currentItems = filteredCatalog.slice(0, currentPage * itemsPerPage);

  console.log(filteredCatalog);
  return (
    <div className="flex flex-col items-center">
      <ul className="flex flex-col items-center ">
        {currentItems.map((item) => (
          <CatalogItem item={item} key={item._id} />
        ))}
      </ul>
      {currentItems.length < catalog.length && !isLoading && (
        <button
          className="w-[146px] h-[56px] mt-[18px] mb-6 py-[16px] px-[32px] border border-[rgba(71, 84, 103, 0.2)] rounded-[200px] font-medium text-sm tracking-[-0.01em] text-[#101828]"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};
