import { ResultSearchMovies, MovieItem } from "./types"

const results: Array<MovieItem> = [
    {
        title: 'Bright',
        uriImage: 'https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg',
        time: {
            value: 139,
            unit: 'min',
        },
        autor: 'David Ayer',
        year: 2017,
        genres: ['Action', 'Crime', 'Fantasy'],
        number_star: 1,
    },
    {
        title: 'Tomb Raider',
        uriImage: 'https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg',
        time: {
            value: 140,
            unit: 'min',
        },
        autor: 'David Ayer',
        year: 2004,
        genres: ['Action', 'Crime', 'Fantasy', 'Commedy'],
        number_star: 5,
    },
    {
        title: 'Black Panther',
        uriImage: 'https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg',
        time: {
            value: 1,
            unit: 'hour',
        },
        autor: 'Ryan Coogler',
        year: 2018,
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        number_star: 3,
    },
]

export const searchMoviesService = (query: string): Promise<ResultSearchMovies> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(results.filter((movie: MovieItem) => movie.title.indexOf(query) > -1))
        }, 2000)
    })
}