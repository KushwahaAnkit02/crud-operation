import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { slices } from "../slices/Slices";

import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, slices.reducer)

export const store = configureStore({
    reducer: {
        app: persistedReducer
    }
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)