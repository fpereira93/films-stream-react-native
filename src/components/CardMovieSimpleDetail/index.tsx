import * as React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Image from 'react-native-scalable-image'
import { width } from '../../ultils/dimensions'
import styles from './styles'
import { ICardMovieSimpleDetailParams } from './types'

const CardMovieSimpleDetail: React.FC<ICardMovieSimpleDetailParams> = (params: ICardMovieSimpleDetailParams) => {
    console.log('# Render: CardMovieSimpleDetail')

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={params.onPress}
            style={styles.container}
        >
            <Image
                source={{ uri: params.uriImage }}
                width={width * 0.25}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

export default React.memo(CardMovieSimpleDetail)