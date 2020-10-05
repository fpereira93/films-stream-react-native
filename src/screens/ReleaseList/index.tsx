import * as React from 'react'
import { Text, View } from 'react-native'
import { PropsReleaseNavigator } from '../../routes/home-types'

const ReleaseListScreen: React.FC<PropsReleaseNavigator> = (props: PropsReleaseNavigator) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation } = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Listagem de Lançamentos</Text>
        </View>
    )
}

export default ReleaseListScreen