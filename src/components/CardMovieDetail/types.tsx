import { IMovieItem } from "../../services/movie/types";

export interface ICardMovieDetailParams {
    // eslint-disable-next-line no-unused-vars
    onPress: (movie: IMovieItem) => void
    movie: IMovieItem,
}