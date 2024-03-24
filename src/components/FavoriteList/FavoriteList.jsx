import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/CarCatalog/operations";
import {
  selectCurrentPage,
  selectFavorites,
  selectIsLoading,
  selectItemsPerPage,
} from "../../redux/CarCatalog/selectors";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { setCurrentPage } from "../../redux/CarCatalog/slice";

export const FavoriteList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(fetchCatalog());
  }, [dispatch]);
  const catalog = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  if (catalog.length === 0) {
    return (
      <p className="text-center text-lg text-gray-600 mt-4">
        No favorites yet. Explore our collection to find your favorites!
      </p>
    );
  }

  const handleLoadMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(fetchCatalog());
  };
  const currentItems = catalog.slice(0, currentPage * itemsPerPage);
  return (
    <div className="flex flex-col items-center ">
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
