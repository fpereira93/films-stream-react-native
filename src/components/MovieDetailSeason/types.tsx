import { LayoutChangeEvent, ViewStyle } from "react-native";
import { IEpisode, ISeason } from "../../services/movie/types";

export interface IMovieDetailSeasonParams {
    season: ISeason
    style?: ViewStyle
    // eslint-disable-next-line no-unused-vars
    onPressEpisode: (episode: IEpisode) => void
    // eslint-disable-next-line no-unused-vars
    onLayoutTeste?: (event: LayoutChangeEvent) => void
    onExpand?: () => void
    onCollapse?: () => void
}