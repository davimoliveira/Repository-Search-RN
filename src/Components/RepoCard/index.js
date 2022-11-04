import {Avatar, Card, CardText, CardText2, LineCard, StackCard, Strong} from './styles'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export const RepoCard = ({item, index}) => {
  
    const navigation = useNavigation();
    const isLoading = useSelector((state) => state.repos.isLoading);

    return(
        <Card onPress={()=>{
          if(!isLoading)
            navigation.navigate("RepoPage", {index})
        }} key={index+"a"}>
          <Avatar source={{uri:item?.owner?.avatar_url}} />
          <StackCard>
            <LineCard>
              <Strong numberOfLines={1} >
                {item?.name}
              </Strong>
              <CardText2>
                {item?.stargazers_count} stars
              </CardText2>
            </LineCard>
            <CardText>
                {item?.owner?.login}
            </CardText>
          </StackCard>
        </Card>
    )
}