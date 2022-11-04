import Search from '../../Assets/SVG/search';
import { Container } from '../../styles';
import { Text } from './styles';


export const RepoListEmpty = () => {

  return(
      <Container>        
        <Text>
            Nenhum repositório{"\n"}corresponde a sua busca
        </Text>
      </Container>
  )
}