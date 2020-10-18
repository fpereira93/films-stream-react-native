import * as React from 'react'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux';
import { useFonts } from '@expo-google-fonts/inter';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { rootReducer } from './src/storage/reducers'
import rootSaga from './src/storage/sagas';
import NavigatorScreens from './src/routes'
import { Button, Text, View } from 'react-native';
import MovieDetailEpisode from './src/components/MovieDetailEpisode';
import { IEpisode, ISeason } from './src/services/movie/types';
import MovieDetailEpisodeList from './src/components/MovieDetailEpisodeList';
import MovieDetailSeason from './src/components/MovieDetailSeason';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const App: React.FC = () => {
    // const [valor, setValor] = React.useState(0)

    // const incrementarValor = React.useCallback(() => {
    //     setValor(valor + 1)
    // }, [setValor, valor])

    const [fontsLoaded] = useFonts({
        'font-gothic': require('./src/assets/fonts/youtube/Alternate-Gothic-No2-BT.ttf'),
        'Montserrat-Medium': require('./src/assets/fonts/montserrat/Montserrat-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return null
    }

    // ##########################
    // ## 'MovieDetailEpisode' ##
    // ##########################
    // const style = React.useMemo(() => {}, [])

    // const episode: IEpisode = React.useMemo(() => {
    //     return {
    //         name: 'Meu episódio teste',
    //         uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //         uriVideo: '',
    //     }
    // }, [])

    // const heightImage = 300

    // ##############################
    // ## 'MovieDetailEpisodeList' ##
    // ##############################
    // const onPress = React.useCallback(() => {
    //     alert('episodio pressionada');
    // }, [])

    // const episodes: IEpisode[] = React.useMemo(() => {
    //     return [
    //         {
    //             name: 'Meu episódio teste',
    //             uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //             uriVideo: '',
    //         },
    //         {
    //             name: 'Meu episódio teste',
    //             uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //             uriVideo: '',
    //         },
    //         {
    //             name: 'Meu episódio teste',
    //             uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //             uriVideo: '',
    //         },
    //         {
    //             name: 'Meu episódio teste',
    //             uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //             uriVideo: '',
    //         },
    //     ]
    // }, [])

    // const onPressEpisode = React.useCallback((episode: IEpisode) => {
    //     console.log(episode);
    // }, [])

    // const onLayout = React.useCallback((event: any) => {
    //     console.log(event);
    // }, [])


    // #########################
    // ## 'MovieDetailSeason' ##
    // #########################

    // const heightImage = 50

    // const season: ISeason = React.useMemo(() => {
    //     return {
    //         name: 'Temporada 1',
    //         episodes: [
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //             {
    //                 name: 'Meu episódio teste',
    //                 uriImage: 'https://image.tmdb.org/t/p/w154/4ncrL372lwop04hkbUWMMgSaC7H.jpg',
    //                 uriVideo: '',
    //             },
    //         ],
    //     }
    // }, [])

    // const onPressEpisode = React.useCallback((episode: IEpisode) => {
    //     console.log(episode);
    // }, [])

    return (
        // <View>
        //     <View style={{marginTop: 50, minHeight: 400 }}>
        //         {/* <MovieDetailEpisode
        //             heightImage={heightImage}
        //             episode={episode}
        //             onPress={onPress}
        //             style={style}
        //         /> */}

        //         {/* <MovieDetailEpisodeList
        //             episodes={episodes}
        //             onPressEpisode={onPressEpisode}
        //             heightImage={heightImage}
        //             onLayout={onLayout}
        //         /> */}

        //         <MovieDetailSeason
        //             season={season}
        //             onPressEpisode={onPressEpisode}
        //         />
        //     </View>
        //     <View>
        //         <Text>{valor}</Text>
        //         <Button onPress={incrementarValor} title="Incrementar valor" />
        //     </View>
        // </View>
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigatorScreens />
            </SafeAreaProvider>
        </Provider>
    )
}

export default App