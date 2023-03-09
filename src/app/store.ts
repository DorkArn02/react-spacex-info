import { configureStore } from "@reduxjs/toolkit"
import { spacexApi } from "../services/spacexApi"


export default configureStore({
    reducer: {
        [spacexApi.reducerPath]: spacexApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(spacexApi.middleware),
})