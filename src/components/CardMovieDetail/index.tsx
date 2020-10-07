import * as React from 'react'
import { Text, View, Image as ReactImage } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Image from 'react-native-scalable-image'
import StarRating from 'react-native-star-rating'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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

    return (
        <>
            <TouchableOpacity activeOpacity={0.8} onPress={params.onPress} style={styles.infoMovie}>
                <Image
                    source={{ uri: params.uriImage }}
                    width={width * 0.25}
                    style={styles.image}
                />
                <View style={styles.details}>
                    <Text style={styles.title}>
                        {params.title}
                    </Text>

                    <Text style={styles.year_autor}>
                        {params.year}, {params.autor}
                    </Text>

                    <View style={styles.container_time}>
                        <Text style={styles.time}>
                            {params.time.value} {params.time.unit}
                        </Text>
                    </View>

                    <Text style={styles.types}>
                        {params.genres.join(', ')}
                    </Text>

                    <View style={styles.containerFeedback}>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={params.number_star}
                            fullStarColor={colors.star_color_full}
                            emptyStarColor={colors.star_color_empty}
                            starSize={fontSizeResponsive(2)}
                            starStyle={{ marginRight: 5 }}
                        />
                        <View style={styles.containerViews}>
                            <Text style={styles.textViews}>{params.number_view}</Text>
                            <ReactImage style={styles.imageViews} source={require('../../assets/icons/eyes.png')} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => setExpandSinopse(!expandSinopse)} style={styles.containerSinopse}>

                { renderLineGradient() }

                <Text style={[styles.textSinopse, expandSinopse ? styles.expandTextSinopse : styles.collapsedTextSinopse]}>
                    {params.sinopse}
                </Text>

                { renderMaterialIconExpand() }
            </TouchableWithoutFeedback>
        </>
    )
}

export default CardMovieDetail;