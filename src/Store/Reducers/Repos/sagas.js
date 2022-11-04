import { call, put, takeEvery } from 'redux-saga/effects'
import { GetApi } from '../../../api';
import reposSlice ,{ getReposSucess, getReposFailure, getReposNextSucess } from './state';

function* workGetReposFetch(payload) {
    if(payload.payload?.query != ""){
        try{
            const repos = yield call(() => GetApi(`/search/repositories?q=${payload.payload.query}&per_page=10&page=${payload.payload.page}`));
            yield put(getReposSucess(repos.data));
        }catch (e){
            yield put(getReposFailure());
        }
    }
}

function* workGetReposNextFetch(payload) {
    if(payload.payload?.query != ""){
        try{
            const repos = yield call(() => GetApi(`/search/repositories?q=${payload.payload.query}&per_page=10&page=${payload.payload.page}`));
            yield put(getReposNextSucess(repos.data.items));
        }catch (e){
            yield put(getReposFailure());
        }
    }
}

function* repoSaga() {
    yield takeEvery('repos/getReposFetch', workGetReposFetch);
    yield takeEvery('repos/getReposNextFetch', workGetReposNextFetch);
}

export default repoSaga;