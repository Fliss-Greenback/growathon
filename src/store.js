import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/api";
import {actionTypes, firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

export const store = configureStore({
  reducer: {
    firebaseReducer,
    firestoreReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    serializableCheck: {
      ignoredActions: [actionTypes.LOGIN, actionTypes.AUTH_LINK_ERROR]
  }
});

setupListeners(store.dispatch);
