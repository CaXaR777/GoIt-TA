import { CatalogList } from "../components/CatalogList/Cataloglist";
import { Filter } from "../components/Filter/Filter";

const CatalogPage = () => {
  return (
    <div className="px-16 ml-auto mr-auto w-[1440px] mt-[50px] flex">
      <Filter />
      <CatalogList />
    </div>
  );
};

export default CatalogPage;
