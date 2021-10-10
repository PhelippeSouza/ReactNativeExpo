import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./user/reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
  timeout: 0, // Fix error redux persyst: rehydrate for "root" called after timeout
};

const persisteReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persisteReducer);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
