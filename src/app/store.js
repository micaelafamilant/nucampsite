import { configureStore } from '@reduxjs/toolkit';
import { campsiteReducer } from '../features/campsites/campsitesSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { commentsReducer } from '../features/comments/commentsSlice'; 
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    campsites: campsiteReducer,
    promotions: promotionsReducer,
    partners: partnersReducer,
    comments: commentsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
