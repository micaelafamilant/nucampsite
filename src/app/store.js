import { configureStore } from "@reduxjs/toolkit";
import { campsiteReducer } from "../features/campsites/campsitesSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";
import { partnersReducer } from "../features/partners/partnersSlice";
import { commentsReducer } from "../features/comments/commentsSlice";
import { userReducer } from "../features/user/userSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    campsites: campsiteReducer,
    promotions: promotionsReducer,
    partners: partnersReducer,
    comments: commentsReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
