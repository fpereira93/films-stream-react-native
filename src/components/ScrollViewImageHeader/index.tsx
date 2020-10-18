import React from 'react'
import { View, Image as ReactImage, Animated } from 'react-native'
import Image from 'react-native-scalable-image'
import { IScrollViewImageHeaderParams } from './types'
import styles from './styles'

const ScrollViewImageHeader: React.FC<IScrollViewImageHeaderParams> = (params: IScrollViewImageHeaderParams) => {
    return (
        <Animated.View
            style={[
                styles.animatedHeaderContainer,
                { height: params.heightInterpolation },
            ]}
        >
            <View style={styles.subContainerHeader}>
                <ReactImage
                    source={{ uri: params.uriImage }}
                    resizeMode="cover"
                    blurRadius={0.7}
                    style={[styles.backgroundHeaderImage, { height: params.maxHeight }]}
                />

                <Image
                    source={{ uri: params.uriImage }}
                    height={params.maxHeight}
                    style={styles.headerMainImage}
                />
            </View>

            {params.children}
        </Animated.View>
    )
}

export default React.memo(ScrollViewImageHeader)