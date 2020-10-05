import * as React from 'react'
import { Text, View } from 'react-native'
import { PropsMovieDetailNavigator } from '../../routes/stack-types'

interface PropsScreen extends PropsMovieDetailNavigator { }

const MovieDetailScreen: React.FC<PropsScreen> = (props: PropsScreen) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation, route } = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Filme com nome de: {route.params.movie.title}</Text>
        </View>
    )
}

export default MovieDetailScreen