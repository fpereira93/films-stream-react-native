import { ResultSearchMovies, IMovieItem } from "./types"

const film1: IMovieItem = {
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
    number_view: 4,
    sinopse: 'Set in a world where fantasy creatures live side by side with humans.'
    + 'A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.'
    + 'Set in a world where fantasy creatures live side by side with humans.'
    + 'A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.',
}

const film2: IMovieItem = {
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
    number_view: 27,
    sinopse: 'Lara Croft, the fiercely independent daughter of a missing adventurer, '
    + 'must push herself beyond her limits when she finds herself on the island where her father disappeared.',
}

const film3: IMovieItem = {
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
    number_view: 100,
    sinopse: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically"
    + "advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
}

const results: Array<IMovieItem> = [
    film1,
    film2,
    film3,
]

export const searchMoviesService = (query: string): Promise<ResultSearchMovies> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(results.filter((movie: IMovieItem) => movie.title.indexOf(query) > -1))
        }, 2000)
    })
}