import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/routes';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './src/Store';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SFProTextRegular from './src/Assets/Fonts/SF-Pro-Text-Regular.otf';
import SFProTextSemibold from './src/Assets/Fonts/SF-Pro-Text-Semibold.otf';
import SFProDisplayBold from './src/Assets/Fonts/SF-Pro-Display-Bold.otf';
import { useCallback } from 'react';


export default function App() {
  const [fontsLoaded] = useFonts({
    'SF Pro Text Regular': SFProTextRegular,
    'SF Pro Text Semibold': SFProTextSemibold,
    'SF Pro Display Bold': SFProDisplayBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (    
    <NavigationContainer>
      <Provider store={store} >
        <Router onLayoutRootView={onLayoutRootView} />
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}

