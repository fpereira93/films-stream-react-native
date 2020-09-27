import * as React from 'react'
import { Text, View } from 'react-native'
import { PropsMovieNavigator } from '../../types/Route/movie-screen'

const MovieListScreen: React.FC<PropsMovieNavigator> = (props: PropsMovieNavigator) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation } = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Listagem de Filmes</Text>
        </View>
    )
}

export default MovieListScreen