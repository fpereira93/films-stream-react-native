import { LayoutChangeEvent } from "react-native";
import { IEpisode } from "../../services/movie/types";

export interface IMovieDetailEpisodeListParams {
    episodes: IEpisode[]
    // eslint-disable-next-line no-unused-vars
    onPressEpisode: (episode: IEpisode) => void
    heightImage: number
}