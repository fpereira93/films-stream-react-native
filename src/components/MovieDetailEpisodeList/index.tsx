import React from 'react'
import { View } from 'react-native'
import { IEpisode } from '../../services/movie/types'
import MovieDetailEpisode from '../MovieDetailEpisode'
import styles from './styles'
import { IMovieDetailEpisodeListParams } from './types'

const MovieDetailEpisodeList: React.FC<IMovieDetailEpisodeListParams> = (props: IMovieDetailEpisodeListParams) => {
    // console.log('# Render: MovieDetailEpisodeList');

    const onPressEpisode = (episode: IEpisode) => {
        return React.useCallback(() => {
            props.onPressEpisode(episode)
        }, [episode])
    }

    const styleEpisode = React.useMemo(() => {
        return { marginTop: 15 }
    }, []);

    return (
        <View style={styles.episodesContainer}>
            {
                props.episodes.map((episode: IEpisode, index: number) => {
                    return (
                        <MovieDetailEpisode
                            onPress={onPressEpisode(episode)}
                            episode={episode}
                            style={styleEpisode}
                            heightImage={props.heightImage}
                            key={index.toString()}
                        />
                    )
                })
            }
        </View>
    )
}

export default React.memo(MovieDetailEpisodeList)