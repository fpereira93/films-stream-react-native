export interface IEpisode {
    name: string
    uriImage: string
    uriVideo: string
}

export interface ISeason {
    name: string
    episodes: IEpisode[]
}

export interface IMovieItem {
    uriImage: string
    title: string
    date: string
    time: {
        unit: string
        value: number
    }
    genres: Array<string>
    number_star: number
    number_view: number
    sinopse: string
    uriVideo?: string
    seasons?: ISeason[]
}

export type ResultSearchMovies = Array<IMovieItem>