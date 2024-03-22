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
    <div>
      <ul>
        {catalog.map((item) => (
          <li key={item._id}>
            <CatalogItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
