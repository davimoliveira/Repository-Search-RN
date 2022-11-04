import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
    name: "repos",
    initialState: {
        repos: [],
        isLoading: false,
        page: 1,
        lastPage: 2,
        query: "",
    },
    reducers: {
        getReposFetch: (state, action) => {
            if(action.payload?.query == ""){
                state.repos = [];             
            }else{
                state.isLoading = true;
            }
        },
        getReposSucess: (state, action) => {
            state.repos = action.payload.items;
            state.page = 1;
            state.lastPage = (action.payload.total_count/10).toFixed(0);
            state.isLoading = false;
        },
        getReposFailure: (state) => {
            state.isLoading = false;
        },
        getReposNextFetch: (state) => {
            state.isLoading = true;
        },
        getReposNextSucess: (state, action) => {
            state.repos = [...state.repos, ...action.payload];
            state.page++
            state.isLoading = false;
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    }
});

export const { getReposFetch, getReposSucess, getReposFailure, getReposNextFetch, getReposNextSucess, setQuery} = reposSlice.actions;

export default reposSlice.reducer;