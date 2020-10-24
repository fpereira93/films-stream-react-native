import * as React from 'react'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { useFonts } from '@expo-google-fonts/inter'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { rootReducer } from './src/storage/reducers'
import rootSaga from './src/storage/sagas'
import NavigatorScreens from './src/routes'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        'font-gothic': require('./src/assets/fonts/youtube/Alternate-Gothic-No2-BT.ttf'),
        'Montserrat-Medium': require('./src/assets/fonts/montserrat/Montserrat-Medium.ttf'),
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigatorScreens />
            </SafeAreaProvider>
        </Provider>
    )
}

export default App