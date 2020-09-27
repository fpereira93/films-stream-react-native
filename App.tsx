import * as React from 'react'
import { useFonts } from '@expo-google-fonts/inter';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import NavigatorScreens from './routes';

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        'font-gothic': require('./src/assets/fonts/youtube/Alternate-Gothic-No2-BT.ttf'),
    });

    if (!fontsLoaded) {
        return null
    }

    return (
        <SafeAreaProvider>
            <NavigatorScreens />
        </SafeAreaProvider>
    )
}

export default App