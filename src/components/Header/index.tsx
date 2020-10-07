import * as React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../constants/colors'
import styles from './styles'
import { IParamsHeader } from './types'

const Header: React.FC<IParamsHeader> = (params: IParamsHeader) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />

            <Text style={styles.title}>
                <Text style={styles.subtitle1}>You</Text><Text style={styles.subtitle2}>Flix</Text>
            </Text>

            <TouchableOpacity activeOpacity={0.7} onPress={params.onClickSearch}>
                <MaterialCommunityIcons name="magnify" color={colors.dark_gray} size={25} />
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(Header)