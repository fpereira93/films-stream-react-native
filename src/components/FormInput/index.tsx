import * as React from 'react'
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import { colors } from "../../constants/colors"
import ButtonIcon from '../ButtonIcon'
import styles from './styles'
import { FormInputParams } from './types'

const FormInput: React.FC<FormInputParams> = (params: FormInputParams) => {
    const [value, setValue] = React.useState('')
    const [visibleClear, setVisibleClear] = React.useState(false)

    const onChange = React.useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const { text } = e.nativeEvent

        setValue(text)
        setVisibleClear(text.trim().length > 0)
        params.onChange(text)
    }, [])

    const clearInput = React.useCallback(() => {
        setValue('')
        setVisibleClear(false)
        params.onChange('')
    }, [setValue])

    const icon = React.useMemo(() => ({ name: 'close', size: 22 }), [setValue])

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, params.style]}
                value={value}
                onChange={onChange}
                autoFocus={true}
                placeholder={params.placeholder}
                placeholderTextColor={colors.placeholder_input}
            />

            {visibleClear ? <ButtonIcon onPress={clearInput} icon={icon} style={styles.iconClear} /> : null}
        </View>
    )
}

export default React.memo(FormInput)