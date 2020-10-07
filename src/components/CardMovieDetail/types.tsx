import { IMovieItem } from "../../services/movie/types";

export interface ICardMovieDetailParams extends IMovieItem {
    onPress: () => void
}