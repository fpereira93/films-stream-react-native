import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Image from 'react-native-scalable-image'
import { IMovieDetailEpisodeParams } from "./types"
import styles from './styles'
import { colors } from '../../constants/colors'

const MovieDetailEpisode: React.FC<IMovieDetailEpisodeParams> = (props: IMovieDetailEpisodeParams) => {
    // console.log('# Render: EpisodeCard')

    return (
        <TouchableOpacity
            style={[
                styles.episodeContainer,
                props.style,
                { height: props.heightImage },
            ]}
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <Image
                source={{ uri: props.episode.uriImage }}
                height={props.heightImage}
                style={styles.episodeImage}
            />

            <Text style={styles.episodeTitle}>
                {props.episode.name}
            </Text>

            <MaterialCommunityIcons
                name="play-circle"
                color={colors.main_color}
                size={props.heightImage * 0.5}
                style={{ marginRight: 5 }}
            />
        </TouchableOpacity>
    )
}

export default React.memo(MovieDetailEpisode)