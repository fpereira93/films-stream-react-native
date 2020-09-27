import * as React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../constants/colors'
import { ParamsHeader } from '../../types/Header'
import styles from './styles'

const Header: React.FC<ParamsHeader> = (params: ParamsHeader) => {
    if (!params.headerShown) {
        return null
    }

    const insets = useSafeAreaInsets()

    const styleContainer = {
        marginTop: insets.top,
        marginBottom: insets.bottom,
        ...styles.container,
    }

    return (
        <View style={styleContainer}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />

            <Text style={styles.title}>
                <Text style={styles.subtitle1}>You</Text><Text style={styles.subtitle2}>Flix</Text>
            </Text>

            <TouchableOpacity activeOpacity={0.7} onPress={params.onClickSearch}>
                <MaterialCommunityIcons name="magnify" color={colors.action_element.inactive} size={25} />
            </TouchableOpacity>
        </View>
    )
}

export default Header