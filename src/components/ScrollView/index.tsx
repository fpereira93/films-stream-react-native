import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { IScrollViewParams } from './types'

const ScrollViewCustom: React.FC<IScrollViewParams> = (params: IScrollViewParams) => {
    return (
        <ScrollView
            contentContainerStyle={[{ paddingTop: params.maxHeight }, params.style]}
            scrollEventThrottle={16}
            onScroll={params.onScroll}
            ref={params.refScrollView}
        >
            {params.children}
        </ScrollView>
    )
}

export default React.memo(ScrollViewCustom)