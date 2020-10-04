import * as React from 'react'
import { Text, View } from 'react-native'
import { PropsHomeNavigator } from '../../routes/types'

const HomeScreen: React.FC<PropsHomeNavigator> = (props: PropsHomeNavigator) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation } = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tela Principal</Text>
        </View>
    )
}

export default HomeScreen