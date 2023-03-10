import Main from './src/main';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import RootStore from './src/redux/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-ExtraLight': require('./src/assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={RootStore}> 
      <Main />
    </Provider>
  );
}
