export interface IMovieItem {
    uriImage: string
    title: string
    year: number
    autor: string
    time: {
        unit: string
        value: number
    }
    genres: Array<string>
    number_star: number,
    number_view: number,
    sinopse: string
}

export type ResultSearchMovies = Array<IMovieItem>