import * as React from 'react'
import { View } from 'react-native'
import CardMovieSimpleDetail from '../../components/CardMovieSimpleDetail'
import Title from '../../components/Title'
import { PropsReleaseNavigator } from '../../routes/home-types'
import { styles } from './styles'

const SerieListScreen: React.FC<PropsReleaseNavigator> = (props: PropsReleaseNavigator) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation } = props

    return (
        <View style={styles.container}>
            <Title text="SÉRIES EM DESTAQUE" />

            <CardMovieSimpleDetail
                title="teste"
                onPress={() => alert('Pressionou')}
                uriImage="https://image.tmdb.org/t/p/w92/7JjTFDtfpQBVIwZA1aD8CgNzduQ.jpg"
            />
        </View>
    )
}

export default SerieListScreen