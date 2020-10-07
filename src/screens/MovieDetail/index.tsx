import * as React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'
import { PropsMovieDetailNavigator } from '../../routes/stack-types'
import { IMovieItem } from '../../services/movie/types'

interface PropsScreen extends PropsMovieDetailNavigator { }

const MovieDetailScreen: React.FC<PropsScreen> = (props: PropsScreen) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation, route } = props

    const film1: IMovieItem = {
        title: 'Bright',
        uriImage: 'https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg',
        time: {
            value: 139,
            unit: 'min',
        },
        autor: 'David Ayer',
        year: 2017,
        genres: ['Action', 'Crime', 'Fantasy'],
        number_star: 1,
        number_view: 4,
        sinopse: 'Set in a world where fantasy creatures live side by side with humans.'
        + 'A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.'
        + 'Set in a world where fantasy creatures live side by side with humans.'
        + 'A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.',
    }

    return (
        <View style={styles.container}>
            <Text>
                Filme com nome de: {film1.title}
            </Text>
        </View>
    )
}

export default MovieDetailScreen