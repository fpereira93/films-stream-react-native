import * as React from 'react'
import { Text, View } from 'react-native'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'

const Header: React.FC = () => {
    const insets: EdgeInsets = useSafeAreaInsets()

    const style = {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
    }

    return (
        <View style={style}>
            <Text>Este é um exemplo de um Header</Text>
        </View>
    )
}

export default Header