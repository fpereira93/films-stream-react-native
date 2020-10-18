import React from 'react'
import { Text, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../constants/colors'
import { IEpisode } from '../../services/movie/types'
import MovieDetailEpisodeList from '../MovieDetailEpisodeList'
import styles, { HEIGHT_IMAGE_EPISODE } from './styles'
import { IMovieDetailSeasonParams } from './types'

const MovieDetailSeason: React.FC<IMovieDetailSeasonParams> = (props: IMovieDetailSeasonParams) => {
    // console.log('# Render: MovieDetailSeason')

    const [expansed, setExpansed] = React.useState(false)
    const [renderFirstTime, setRenderFirstTime] = React.useState(false)

    const heightCardSeason = 50

    const spinValue = React.useRef(new Animated.Value(0)).current
    const expanseValue = React.useRef(new Animated.Value(heightCardSeason)).current

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    })

    React.useEffect(() => {
        Animated.timing(spinValue, {
            toValue: expansed ? 1 : 0,
            duration: 150,
            easing: (value: number) => value,
            useNativeDriver: true,
        }).start()

        const totalMarginTopEpisodes = (props.season.episodes.length * 15)

        const marginBottomListEpisodes = 10

        const newHeightCardSeason = (
            (props.season.episodes.length * HEIGHT_IMAGE_EPISODE)
            + totalMarginTopEpisodes
            + heightCardSeason
            + marginBottomListEpisodes
        )

        Animated.timing(expanseValue, {
            toValue: expansed ? newHeightCardSeason : 50,
            duration: 150,
            easing: (value: number) => value,
            useNativeDriver: false,
        }).start()

        if (expansed && !renderFirstTime) {
            setRenderFirstTime(true)
        }
    }, [expansed])

    const toggleEpisodes = () => {
        setExpansed(!expansed)
    }

    const onPressEpisode = React.useCallback((episode: IEpisode) => {
        console.log(episode)
    }, [])

    const episodes = React.useMemo(() => {
        return props.season.episodes;
    }, [props.season.episodes])

    return (
        <Animated.View style={[
            styles.container,
            props.style,
            { height: expanseValue },
        ]}>
            <TouchableOpacity
                style={styles.headerContainer}
                onPress={toggleEpisodes}
                activeOpacity={0.8}
            >
                <Text style={styles.title}>
                    {props.season.name}
                </Text>

                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        color={colors.main_color}
                        size={25}
                    />
                </Animated.View>
            </TouchableOpacity>

            {
                (expansed || renderFirstTime) ? (
                    <MovieDetailEpisodeList
                        episodes={episodes}
                        onPressEpisode={onPressEpisode}
                        heightImage={HEIGHT_IMAGE_EPISODE}
                    />
                ) : null
            }

        </Animated.View>
    )
}

export default React.memo(MovieDetailSeason)