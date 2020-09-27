import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "./stack"

export type MovieScreenRouteProp = RouteProp<RootStackParamList, 'Movies'>
export type MovieScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Movies'>

export type PropsMovieNavigator = {
    route: MovieScreenRouteProp
    navigation: MovieScreenNavigationProp
}