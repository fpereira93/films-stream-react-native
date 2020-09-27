import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "./stack"

export type SerieScreenRouteProp = RouteProp<RootStackParamList, 'Series'>
export type SerieScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Series'>

export type PropsSerieNavigator = {
    route: SerieScreenRouteProp
    navigation: SerieScreenNavigationProp
}