import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userInfo from "./auth/userInfo";
import adminsInfo from "./admins/admins";
import adminInfo from "./admins/edit_admin";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import costumerInfo from "./costumers/costumers";

const rootReducer = combineReducers({
  user: userInfo,
  admins: adminsInfo,
  admin: adminInfo,
  costumers: costumerInfo,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    axmad_joja: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
