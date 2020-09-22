import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { PropsMovieNavigator } from '../../types/route-movie-screen'

const MovieListScreen: React.FC<PropsMovieNavigator> = (props: PropsMovieNavigator) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation } = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => {}} />
        </View>
    )
}

export default MovieListScreen