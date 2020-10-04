import { MovieItem } from "../../services/movie/types";

export interface CardDetailSearchParams extends MovieItem {
    onPress: () => void
}