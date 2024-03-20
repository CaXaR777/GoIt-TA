// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// // Импортируйте ваши редукторы (reducers) здесь
// // import userReducer from "./reducers/userReducer";
// // import cartReducer from "./reducers/cartReducer";

// // Объедините ваши редукторы в корневой редуктор
// const rootReducer = combineReducers({
//   //   user: userReducer,
//   //   cart: cartReducer,
// });

// // Настройте персистентное хранилище с помощью redux-persist
// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(
//   persistConfig,

//   rootReducer
// );

// // Создайте и экспортируйте хранилище Redux
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
