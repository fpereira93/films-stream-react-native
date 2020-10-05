import * as React from 'react'
import { Text, View } from 'react-native'
import { PropsReleaseNavigator } from '../../routes/types'

const SerieListScreen: React.FC<PropsReleaseNavigator> = (props: PropsReleaseNavigator) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation } = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Listagem de Séries</Text>
        </View>
    )
}

export default SerieListScreen