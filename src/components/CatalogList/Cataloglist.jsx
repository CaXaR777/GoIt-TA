import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/CarCatalog/operations";
import { selectCatalog } from "../../redux/CarCatalog/selectors";
import { CatalogItem } from "../CatalogItem/CatalogItem";

export const CatalogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);
  const catalog = useSelector(selectCatalog);

  return (
    <>
      <ul className="flex flex-col items-center ">
        {catalog.map((item) => (
          <CatalogItem item={item} key={item._id} />
        ))}
      </ul>
    </>
  );
};
