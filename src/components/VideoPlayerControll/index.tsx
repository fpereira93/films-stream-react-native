import React from 'react'
import { View } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation'
import VideoPlayer from 'react-native-video-player'
import styles from './styles'
import { IVideoPlayerControllParams } from './types'

const VideoPlayerControll: React.FC<IVideoPlayerControllParams> = (params: IVideoPlayerControllParams) => {
    React.useEffect(() => {
        ScreenOrientation.unlockAsync()

        return () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
        }
    })

    return (
        <View style={styles.container}>
            <VideoPlayer video={{ uri: params.uri }} />
        </View>
    )
}

export default React.memo(VideoPlayerControll)