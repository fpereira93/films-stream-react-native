import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "./route-stack"

export type MovieScreenRouteProp = RouteProp<RootStackParamList, 'Movie'>
export type MovieScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Movie'>

export type PropsMovieNavigator = {
    route: MovieScreenRouteProp
    navigation: MovieScreenNavigationProp
}