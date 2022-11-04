import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, RepoPage} from './Screens';
import { BackButton } from './Components';

const Stack = createNativeStackNavigator();

export const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}  />
            <Stack.Screen name="RepoPage" component={RepoPage} 
                options={{title:"", 
                    headerLeft: () => (
                        <BackButton />
                    )
                }}  
            />
        </Stack.Navigator>
    )
}