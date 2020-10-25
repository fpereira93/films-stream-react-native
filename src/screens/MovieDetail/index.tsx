import React from 'react'

import {
    View,
    Animated,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Easing,
    Text,
    LayoutChangeEvent,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import StarRating from 'react-native-star-rating'
// eslint-disable-next-line import/no-extraneous-dependencies
import { LinearGradient } from 'expo-linear-gradient'

import styles, { MAX_HEIGHT, MIN_HEIGHT } from './styles'
import CustomScrollView from '../../components/ScrollView'
import ScrollViewImageHeader from '../../components/ScrollViewImageHeader'
import ButtonIcon from '../../components/ButtonIcon'
import { colors } from '../../constants/colors'
import { fontSizeResponsive } from '../../ultils/dimensions'
import { PropsMovieDetailNavigator } from '../../routes/stack-types'
import MovieDetailSeason from '../../components/MovieDetailSeason'
import { IEpisode, ISeason } from '../../services/movie/types'

const MovieDetailScreen: React.FC<PropsMovieDetailNavigator> = (props: PropsMovieDetailNavigator) => {
    // console.log('# Render: MovieDetailScreen')

    const [foregroundViewRef, setForegroundViewRef] = React.useState<View>()
    const [headerTitleRef, setHeaderTitleRef] = React.useState<View>()
    const [topContainerSeason1, setTopContainerSeason1] = React.useState(0)
    const [topContainerSeason2, setTopContainerSeason2] = React.useState(0)
    const [finalPositionsYSeasons, setFinalPositionsYSeasons] = React.useState<number[]>([])
    const [expandIndexSeason, setExpandIndexSeason] = React.useState(-1)

    const scrollYAnimatedValue = React.useRef(new Animated.Value(0)).current

    const fadeHeaderTitle = React.useRef(new Animated.Value(-MIN_HEIGHT)).current

    const OPACITY_HEADER = 0.8

    const scrollViewRef = React.useRef<ScrollView>(null)

    const { movie } = props.route.params

    const headerHeightAnimation = React.useMemo(() => {
        return (
            scrollYAnimatedValue.interpolate({
                inputRange: [0, (MAX_HEIGHT - MIN_HEIGHT)],
                outputRange: [MAX_HEIGHT, MIN_HEIGHT],
                extrapolate: 'clamp',
                easing: Easing.linear,
            })
        )
    }, [movie])

    let displayedHeaderTitle = false

    React.useEffect(() => {
        if (expandIndexSeason !== -1) {
            setTimeout(() => {
                const marginTop = -10
                const topContainerSeasons = topContainerSeason1 + topContainerSeason2
                const toTop = (topContainerSeasons - MIN_HEIGHT) + marginTop + (finalPositionsYSeasons[expandIndexSeason] ?? 0)

                scrollViewRef.current?.scrollTo({ y: toTop, animated: true })
            }, 100)
        }
    }, [expandIndexSeason])

    const changeBottomDisplayTitleHeader = (toShow: boolean) => {
        if (toShow === displayedHeaderTitle) {
            return
        }

        displayedHeaderTitle = toShow

        Animated.timing(fadeHeaderTitle, {
            toValue: toShow ? 0 : -MIN_HEIGHT,
            duration: 100,
            useNativeDriver: false,
            easing: Easing.inOut(Easing.ease),
        }).start()
    }

    const onScrollView = React.useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollY = e.nativeEvent.contentOffset.y

        const heightVisible = MAX_HEIGHT - MIN_HEIGHT

        const percentToOpacity = heightVisible >= scrollY ? scrollY / heightVisible : 1

        const showHeaderTitle = (scrollY - heightVisible) >= MIN_HEIGHT

        changeBottomDisplayTitleHeader(showHeaderTitle)

        if (foregroundViewRef) {
            foregroundViewRef.setNativeProps({ style: { opacity: percentToOpacity * OPACITY_HEADER } })
        }

        scrollYAnimatedValue.setValue(scrollY)
    }, [movie, foregroundViewRef, headerTitleRef])

    const onPressBackpage = React.useCallback(() => {
        props.navigation.goBack()
    }, [movie])

    const isSerie = (): boolean => {
        if (movie.seasons?.length) {
            return true
        }
        return false
    }

    const hasSinopse = (): boolean => {
        if (movie.sinopse && movie.sinopse.length) {
            return true;
        }
        return false;
    }

    const onPressEpisode = React.useCallback((episode: IEpisode): void => {
        console.log('# Episódio pressionado');
        console.log("# Tela movie Detail");
        console.log(episode);
    }, [movie])

    const renderSeasons = React.useCallback(() => {
        const positionsYSeasons: number[] = []

        return movie.seasons?.map((season: ISeason, index: number) => (
            <MovieDetailSeason
                style={React.useMemo(() => {
                    return { marginTop: index > 0 ? 15 : 0 }
                }, [season])}
                season={season}
                key={index.toString()}
                onPressEpisode={onPressEpisode}
                onCollapse={React.useCallback(() => {
                    setExpandIndexSeason(-1)
                }, [season])}
                onExpand={React.useCallback(() => {
                    setExpandIndexSeason(index)
                }, [season])}
                onLayoutTeste={React.useCallback((e: LayoutChangeEvent) => {
                    positionsYSeasons[index] = e.nativeEvent.layout.y

                    if (movie.seasons && index === movie.seasons?.length - 1) {
                        setFinalPositionsYSeasons(positionsYSeasons)
                    }
                }, [season])}
            />
        ))
    }, [movie])

    return (
        <View style={styles.container}>
            <ScrollViewImageHeader
                uriImage={movie.uriImage}
                heightInterpolation={headerHeightAnimation}
                maxHeight={MAX_HEIGHT}
            >
                <View style={[
                    styles.containerButtonPlay,
                    { opacity: isSerie() ? 0 : 1 },
                ]}>
                    <View style={styles.backgroundButtonPlay} />

                    <ButtonIcon
                        onPress={() => {
                            console.log('# Execute player');
                        }}
                        icon={{
                            name: 'play-circle',
                            color: colors.main_color,
                            size: MIN_HEIGHT * 1.5,
                        }}
                        activeOpacity={0.9}
                        style={styles.playButtonIcon}
                    />
                </View>
                <View style={styles.overflowViewContainer}>
                    <View style={styles.containerActions}>
                        <LinearGradient
                            start={{ y: 0, x: 0 }}
                            end={{ y: 1, x: 0 }}
                            style={{
                                position: "absolute",
                                width: '100%',
                                height: '100%',
                                opacity: 0.5,
                            }}
                            colors={[colors.black, 'transparent']}
                        />

                        <ButtonIcon
                            onPress={onPressBackpage}
                            icon={{ name: 'arrow-left', color: colors.white }}
                            style={styles.buttonIcon}
                        />
                    </View>

                    <Animated.View
                        style={[
                            styles.animatedHeaderContainer,
                            { height: headerHeightAnimation },
                        ]}
                        ref={(ref: View) => setForegroundViewRef(ref)}
                    />

                    <Animated.View
                        style={[
                            styles.containerTitleHeader,
                            { bottom: fadeHeaderTitle },
                        ]}
                        ref={(ref: View) => setHeaderTitleRef(ref)}
                    >
                        <Text style={styles.navTitleView}>
                            {movie.title}
                        </Text>
                    </Animated.View>
                </View>

            </ScrollViewImageHeader>

            <CustomScrollView
                minHeight={MIN_HEIGHT}
                maxHeight={MAX_HEIGHT}
                onScroll={onScrollView}
                style={{ backgroundColor: colors.white }}
                refScrollView={scrollViewRef}
            >
                <View style={[styles.section, styles.rowMainTitle]}>
                    <Text style={styles.title}>
                        {movie.title}
                    </Text>

                    {
                        movie.date ? (
                            <Text style={styles.subTitle}>
                                {movie.date}
                            </Text>
                        ) : null
                    }
                </View>

                <View style={styles.sectionInfo}>
                    {
                        movie.time ? (
                            <View style={styles.containerTime}>
                                <Text style={styles.time}>
                                    {movie.time.value} {movie.time.unit}
                                </Text>
                            </View>
                        ) : null
                    }

                    <Text style={styles.genresText}>
                        {movie.genres.join(', ')}
                    </Text>

                    <View style={styles.containerFeedback}>
                        <StarRating
                            iconSet="MaterialCommunityIcons"
                            emptyStar="star-outline"
                            disabled={true}
                            maxStars={5}
                            rating={movie.number_star}
                            fullStarColor={colors.star_color_full}
                            emptyStarColor={colors.star_color_empty}
                            starSize={fontSizeResponsive(2.5)}
                            starStyle={{ marginRight: 5 }}
                        />
                    </View>
                </View>

                {
                    hasSinopse() ? (
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Sinopse</Text>
                            <Text style={styles.sectionSinopseText}>{movie.sinopse}</Text>
                        </View>
                    ) : null
                }

                <View
                    style={[
                        styles.section,
                        { display: isSerie() ? "flex" : "none" },
                    ]}
                    onLayout={(e: LayoutChangeEvent) => setTopContainerSeason1(e.nativeEvent.layout.y)}
                >
                    <Text style={[styles.sectionTitle, styles.seasonTitle]}>Temporadas</Text>

                    <View
                        onLayout={(e: LayoutChangeEvent) => setTopContainerSeason2(e.nativeEvent.layout.y)}
                    >
                        { renderSeasons() }
                    </View>
                </View>
            </CustomScrollView>
        </View>
    )
}

export default MovieDetailScreen