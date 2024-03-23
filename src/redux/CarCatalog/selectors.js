import { createSelector } from "@reduxjs/toolkit";

export const selectCatalog = (state) => state.catalog.catalog;

export const selectCurrentPage = (state) => state.catalog.currentPage;

export const selectItemsPerPage = (state) => state.catalog.itemsPerPage;

export const selectFavorites = (state) => state.catalog.favorites;

export const selectIsLoading = (state) => state.catalog.isLoading;

export const selectCurrentItems = (state) => {
  const { currentPage, itemsPerPage, catalog } = state.catalog;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  return catalog.slice(startIndex, endIndex);
};

export const selectCatalogError = (state) => state.catalog.error;

export const selectFeatures = createSelector([selectCatalog], (catalog) => {
  let newCatalog = [];
  newCatalog.push(
    ...catalog.map((item) => {
      const feature = {};
      if (item.adults) feature.adults = `${item.adults} adults`;
      if (item.transmission) feature.transmission = item.transmission;
      if (item.engine) feature.engine = item.engine;
      if (item.details?.kitchen) feature.kitchen = "kitchen";
      if (item.details?.beds) feature.beds = `${item.details.beds} beds`;
      if (item.details?.airConditioner) feature.AC = "AC";

      if (item.details?.airConditioner)
        feature.conditioner = `${item.details.airConditioner} air conditioner`;
      if (item.details?.CD) feature.CD = "CD";
      if (item.details?.radio) feature.radio = "Radio";
      if (item.details?.hob) feature.hob = `${item.details.hob} hob`;
      if (item.details?.toilet) feature.toilet = "Toilet";
      if (item.details?.shower) feature.shower = "Shower";
      if (item.details?.freezer) feature.freezer = "Freezer";
      if (item.details?.gas) feature.gas = "Gas";
      if (item.details?.water) feature.water = "Water";
      if (item.details?.microwave) feature.microwave = "Microwave";
      return { ...item, feature };
    })
  );
  return newCatalog;
});
