import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { PropsHomeNavigator } from '../../types/route-home-screen'

const HomeScreen: React.FC<PropsHomeNavigator> = (props: PropsHomeNavigator) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation } = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Movie')} />
        </View>
    )
}

export default HomeScreen