import { MovieItem } from "../../services/movie/types";

export interface CardMovieDetailParams extends MovieItem {
    onPress: () => void
}