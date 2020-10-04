import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type RootStackParamList = {
    Home: undefined,
    Releases: undefined,
    Movies: undefined,
    Series: undefined,
}

// types "HOME"
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

export type PropsHomeNavigator = {
    route: HomeScreenRouteProp
    navigation: HomeScreenNavigationProp
}

// types "Movie Screen"
export type MovieScreenRouteProp = RouteProp<RootStackParamList, 'Movies'>
export type MovieScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Movies'>

export type PropsMovieNavigator = {
    route: MovieScreenRouteProp
    navigation: MovieScreenNavigationProp
}

// types "Release Screen"
export type ReleaseScreenRouteProp = RouteProp<RootStackParamList, 'Releases'>
export type ReleaseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Releases'>

export type PropsReleaseNavigator = {
    route: ReleaseScreenRouteProp
    navigation: ReleaseScreenNavigationProp
}

// types "Serie Screen"
export type SerieScreenRouteProp = RouteProp<RootStackParamList, 'Series'>
export type SerieScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Series'>

export type PropsSerieNavigator = {
    route: SerieScreenRouteProp
    navigation: SerieScreenNavigationProp
}