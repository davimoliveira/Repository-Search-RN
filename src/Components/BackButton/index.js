import { useNavigation } from '@react-navigation/native';
import Back from '../../Assets/SVG/back'
import { Box } from './styles';

export const BackButton = () => {
  
    const navigation = useNavigation();

    return(
      <Box onPress={()=>{navigation.goBack()}}>
        <Back />
      </Box>
    )
}