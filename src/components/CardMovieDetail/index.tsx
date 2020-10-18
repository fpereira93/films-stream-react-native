import * as React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Image from 'react-native-scalable-image'
import StarRating from 'react-native-star-rating'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// eslint-disable-next-line import/no-extraneous-dependencies
import { LinearGradient } from 'expo-linear-gradient'
import { fontSizeResponsive, width } from '../../ultils/dimensions'
import styles from './styles'
import { colors } from '../../constants/colors'
import { ICardMovieDetailParams } from './types'

const CardMovieDetail: React.FC<ICardMovieDetailParams> = (params: ICardMovieDetailParams) => {
    const [expandSinopse, setExpandSinopse] = React.useState(false)

    const renderLineGradient = () => {
        if (!expandSinopse) {
            return (
                <LinearGradient
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: -1 }}
                    style={styles.linearGradientSinopse}
                    colors={[colors.white, 'transparent']}
                />
            )
        }

        return null
    }

    const renderMaterialIconExpand = () => {
        if (!expandSinopse) {
            return (
                <MaterialCommunityIcons
                    style={styles.iconViewMoreSinopse}
                    name="chevron-down"
                    color={colors.main_color}
                    size={25}
                />
            )
        }

        return null
    }

    const hasSinopse = (): boolean => {
        if (params.movie.sinopse && params.movie.sinopse.length) {
            return true;
        }

        return false;
    }

    const onPressCard = React.useCallback(() => {
        params.onPress(params.movie)
    }, [params.onPress]);

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPressCard}
                style={[
                    styles.infoMovie,
                    !hasSinopse() ? styles.containerBottomRadius : null,
                ]}
            >
                <Image
                    source={{ uri: params.movie.uriImage }}
                    width={width * 0.25}
                    style={[
                        styles.image,
                        !hasSinopse() ? styles.imageBottomRadius : null,
                    ]}
                />

                <View style={styles.details}>
                    <Text style={styles.title}>
                        {params.movie.title}
                    </Text>

                    {
                        params.movie.date ? (
                            <Text style={styles.date}>
                                {params.movie.date}
                            </Text>
                        ) : null
                    }

                    {
                        params.movie.time ? (
                            <View style={styles.container_time}>
                                <Text style={styles.time}>
                                    {params.movie.time.value} {params.movie.time.unit}
                                </Text>
                            </View>
                        ) : null
                    }

                    <Text style={styles.genres}>
                        {params.movie.genres.join(', ')}
                    </Text>

                    <View style={styles.containerFeedback}>
                        <StarRating
                            iconSet="MaterialCommunityIcons"
                            emptyStar="star-outline"
                            disabled={true}
                            maxStars={5}
                            rating={params.movie.number_star}
                            fullStarColor={colors.star_color_full}
                            emptyStarColor={colors.star_color_empty}
                            starSize={fontSizeResponsive(2.5)}
                            starStyle={{ marginRight: 5 }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            {
                hasSinopse() ? (
                    <TouchableWithoutFeedback
                        onPress={() => setExpandSinopse(!expandSinopse)}
                        style={[
                            styles.containerSinopse,
                            styles.containerBottomRadius,
                        ]}
                    >
                        { renderLineGradient() }
                        <Text style={[styles.textSinopse, expandSinopse ? styles.expandTextSinopse : styles.collapsedTextSinopse]}>
                            {params.movie.sinopse}
                        </Text>
                        { renderMaterialIconExpand() }
                    </TouchableWithoutFeedback>
                ) : null
            }
        </>
    )
}

export default React.memo(CardMovieDetail)