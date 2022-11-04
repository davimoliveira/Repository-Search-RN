import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../Assets/SVG/search'
import { getReposFetch, setQuery } from '../../Store/Reducers/Repos/state';
import {Box, Input, InputContainer, Title} from './styles'


export const RepoListHeader = () => {

  const dispatch = useDispatch(); 
  const query = useSelector((state) => state.repos.query);

  const onChangeQuery = (text) => {
    if(dispatch){
      dispatch(setQuery(text));
    }
  }

  const onSubmitQuery = () =>{
    if(dispatch){
      dispatch(getReposFetch({query: query, page: 1}));
    }
  }

  return(
      <Box>
        <Title>
          Repositórios
        </Title>
        <InputContainer>          
          <Search />
          <Input 
            placeholder="Busca por repositórios"
            onChangeText={onChangeQuery}
            onSubmitEditing={onSubmitQuery}
            onBlur={onSubmitQuery}
          />
        </InputContainer>
      </Box>
  )
}