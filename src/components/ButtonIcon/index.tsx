import * as React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../constants/colors'
import styles from './styles'
import { IButtonIconParams } from './types'

const ButtonIcon: React.FC<IButtonIconParams> = (params: IButtonIconParams) => {
    const colorIcon = params.icon.color ?? colors.dark_gray
    const sizeIcon = params.icon.size ?? 25
    const activeOpacity = params.activeOpacity ?? 0.7

    return (
        <TouchableOpacity
            style={[styles.container, params.style]}
            activeOpacity={activeOpacity}
            onPress={params.onPress}
        >
            <MaterialCommunityIcons name={params.icon.name} color={colorIcon} size={sizeIcon} />
        </TouchableOpacity>
    )
}

export default React.memo(ButtonIcon)