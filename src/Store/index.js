import { configureStore } from "@reduxjs/toolkit";
import reposSlice from "./Reducers/Repos/state";
import createSagaMiddleware from "@redux-saga/core";
import repoSaga from "./Reducers/Repos/sagas";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer:{
        repos: reposSlice
    },
    middleware: [saga]
})

saga.run(repoSaga);

export default store;