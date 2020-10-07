import * as React from 'react'
import { View } from 'react-native'
import ButtonIcon from '../ButtonIcon'
import FormInput from '../FormInput'
import styles from './styles'
import { IHeaderSearchParams } from './types'

const HeaderSearch: React.FC<IHeaderSearchParams> = (params: IHeaderSearchParams) => {
    return (
        <View style={styles.container}>
            <ButtonIcon
                onPress={params.onPressBackPage}
                icon={{ name: 'arrow-left' }}
                style={styles.buttonIcon}
            />

            <FormInput
                style={styles.formInput}
                placeholder="Pesquisar"
                onChange={params.onChangeText}
            />
        </View>
    )
}

export default React.memo(HeaderSearch)