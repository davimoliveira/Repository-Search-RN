import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Footer, List, RepoContainer } from './styles';
import { RepoCard, RepoListHeader, RepoListEmpty } from '../../Components';
import { getReposFetch, getReposNextFetch } from '../../Store/Reducers/Repos/state';
import { useEffect, useState } from 'react';


export const Home = () =>{

    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const repos = useSelector((state) => state.repos.repos);
    const query = useSelector((state) => state.repos.query);
    const page = useSelector((state) => state.repos.page);
    const isLoading = useSelector((state) => state.repos.isLoading);
    const lastPage = useSelector((state) => state.repos.lastPage);

    useEffect(()=>{
      if(!isLoading){
        setRefreshing(false);
      }
    },[isLoading])
    
    const renderItem = ({item, index}) => (
      <RepoCard key={index} item={item} index={index} />
    );

    const onEndReached = () =>{
      if(!isLoading && page < lastPage){
        dispatch(getReposNextFetch({query, page: page+1}))
      }
    }

    const onRefresh = () =>{
      if(!isLoading){
        setRefreshing(true);
        dispatch(getReposFetch({query, page: 1}));
      }
    }
    
    return(
        <RepoContainer>
          <View style={{flex: 1}}>            
            <RepoListHeader key={"head"} />
            <List
              data={repos}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListFooterComponent={()=>(
                <Footer>
                  {isLoading &&
                    <ActivityIndicator size={25} color={'#0A84FF'} />
                  }
                </Footer>
              )}
              onEndReachedThreshold={0.4}
              onEndReached={onEndReached}
              onRefresh={onRefresh}
              refreshing={refreshing}
              ListEmptyComponent={()=>(
                <RepoListEmpty />
              )}
            />
          </View>
        </RepoContainer>
    )
}