import { ViewStyle } from "react-native"
import { IEpisode } from "../../services/movie/types"

export interface IMovieDetailEpisodeParams {
    style?: ViewStyle
    episode: IEpisode
    heightImage: number
    onPress: () => void
}