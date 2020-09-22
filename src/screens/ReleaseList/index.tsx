import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { PropsReleaseNavigator } from '../../types/route-release-screen'

const ReleaseListScreen: React.FC<PropsReleaseNavigator> = (props: PropsReleaseNavigator) => {
    // eslint-disable-next-line no-unused-vars
    const { navigation } = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Lançamentos Screen</Text>
            <Button title="Go to Details" onPress={() => {}} />
        </View>
    )
}

export default ReleaseListScreen