export interface MovieItem {
    uriImage: string
    title: string
    year: number
    autor: string
    time: {
        unit: string
        value: number
    }
    genres: Array<string>
    number_star: number
}

export type ResultSearchMovies = Array<MovieItem>