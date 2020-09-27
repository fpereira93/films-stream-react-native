import * as React from 'react'
import { Text, View } from 'react-native'
import { PropsHomeNavigator } from '../../types/Route/home-screen'

const SearchScreen: React.FC<PropsHomeNavigator> = (props: PropsHomeNavigator) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation } = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tela de pesquisa</Text>
        </View>
    )
}

export default SearchScreen