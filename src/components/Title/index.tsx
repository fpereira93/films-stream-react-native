import * as React from 'react'
import { Text } from 'react-native'
import styles from './styles'
import { ITitleParams } from './types'

const Title: React.FC<ITitleParams> = (params: ITitleParams) => {
    return (
        <Text style={styles.container}>
            { params.text }
        </Text>
    )
}

export default React.memo(Title)