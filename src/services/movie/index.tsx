import movies from '../database/movie.json'
import seasons from '../database/season.json'
import episodes from '../database/episode.json'
import { IMovieItem, ResultSearchMovies } from './types'

const seasonsMapping: any = {}
const episodesMapping: any = {}

seasons.forEach((season) => {
    if (!seasonsMapping[season.id_movie]) {
        seasonsMapping[season.id_movie] = [];
    }

    seasonsMapping[season.id_movie].push(season);
});

episodes.forEach((episode) => {
    if (!episodesMapping[episode.id_serie_season]) {
        episodesMapping[episode.id_serie_season] = [];
    }
    episodesMapping[episode.id_serie_season].push(episode);
});

const formatDuration = (input: string | null) => {
    if (!input) {
        return null;
    }

    const temp = input.split(' ')

    return {
        value: +temp[0],
        unit: temp[1].replace('.', ''),
    }
}

const getEpisodesBySeason = (id_serie_season: any) => {
    const episodes_find: any = episodesMapping[id_serie_season];

    if (!episodes_find) {
        return [];
    }

    return episodes_find.map((episode: any) => {
        return {
            name: episode.name,
            uriImage: episode.url_image,
            // uriVideo: episode.url_film,
            uriVideo: 'http://open.ryzer.site/s/02/4955/1x1.mp4',
        }
    })
}

const getSeasonsByMovie = (id_movie: any) => {
    const seasons_find = seasonsMapping[id_movie];

    if (!seasons_find) {
        return [];
    }

    return seasons_find.map((season: any) => {
        return {
            name: season.name,
            episodes: getEpisodesBySeason(season.id),
        }
    })
}

const getMovies = () => {
    const formated = movies.map((movie: any) => {
        return {
            title: movie.name,
            uriImage: movie.url_image,
            uriVideo: movie.url_film,
            time: formatDuration(movie.duration),
            date: movie.date,
            genres: [
                'Action',
                'Crime',
                'Fantasy',
            ],
            number_star: movie.rating ? Math.round(movie.rating / 2) : null,
            number_view: 50,
            sinopse: movie.sinopse,
            seasons: !movie.url_film
                ? getSeasonsByMovie(movie.id)
                : null,
        }
    })

    return formated;
}

const results: Array<IMovieItem> = getMovies();

export const searchMoviesService = (query: string): Promise<ResultSearchMovies> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(results.filter((movie: IMovieItem) => {
                return movie.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1
            }))
            // resolve([results[0], results[1]])
        }, 2000)
    })
}