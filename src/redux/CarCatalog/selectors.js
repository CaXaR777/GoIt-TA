export const selectCatalog = (state) => state.catalog.catalog;

export const selectCurrentPage = (state) => state.catalog.currentPage;

export const selectItemsPerPage = (state) => state.catalog.itemsPerPage;

export const selectCurrentItems = (state) => {
  const { currentPage, itemsPerPage, catalog } = state.catalog;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return catalog.slice(startIndex, endIndex);
};

export const selectCatalogStatus = (state) => state.catalog.status;

export const selectCatalogError = (state) => state.catalog.error;
