import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { MovieItem } from "../services/movie/types"

export type StackParamList = {
    HomeStack: undefined
    Search: undefined
    MovieDetail: {
        movie: MovieItem
    }
}

// types "Home Stack"
export type SearchsRouteProp = RouteProp<StackParamList, 'HomeStack'>
export type SearchsNavigationProp = StackNavigationProp<StackParamList, 'HomeStack'>

export type PropsSearchsNavigator = {
    route: SearchsRouteProp
    navigation: SearchsNavigationProp
}

// types "Movie Details"
export type MovieDetailScreenRouteProp = RouteProp<StackParamList, 'MovieDetail'>
export type MovieDetailScreenNavigationProp = StackNavigationProp<StackParamList, 'MovieDetail'>

export type PropsMovieDetailNavigator = {
    route: MovieDetailScreenRouteProp
    navigation: MovieDetailScreenNavigationProp
}

// types "Search"
export type SearchScreenRouteProp = RouteProp<StackParamList, 'Search'>
export type SearchScreenNavigationProp = StackNavigationProp<StackParamList, 'Search'>

export type PropsSearchNavigator = {
    route: SearchScreenRouteProp
    navigation: SearchScreenNavigationProp
}