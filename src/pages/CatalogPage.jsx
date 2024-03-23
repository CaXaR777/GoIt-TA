import { useState } from "react";
import { CatalogList } from "../components/CatalogList/Cataloglist";
// import { Filter } from "../components/Filter/Filter";

const CatalogPage = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value) => {
    setFilter(value);
  };
  return (
    <div className="px-16 ml-auto mr-auto w-[1440px] mt-[50px] flex">
      <CatalogList filter={filter} />
    </div>
  );
};

export default CatalogPage;
//   <Filter handleFilterChange={handleFilterChange} />;
