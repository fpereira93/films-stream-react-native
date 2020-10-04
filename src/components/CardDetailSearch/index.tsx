import * as React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Image from 'react-native-scalable-image';
import StarRating from 'react-native-star-rating';
import { width } from '../../ultils/dimensions'
import styles from './styles'
import { colors } from '../../constants/colors';
import { CardDetailSearchParams } from './types';

const CardDetailSearch: React.FC<CardDetailSearchParams> = (params: CardDetailSearchParams) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={params.onPress} style={styles.container}>
            <Image
                source={{ uri: params.uriImage }}
                width={width * 0.25}
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

                <View style={styles.containerRating}>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={params.number_star}
                        fullStarColor={colors.star_color_full}
                        emptyStarColor={colors.star_color_empty}
                        starSize={20}
                        starStyle={{ marginRight: 5 }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardDetailSearch