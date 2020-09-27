import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "./stack"

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

export type PropsHomeNavigator = {
    route: HomeScreenRouteProp
    navigation: HomeScreenNavigationProp
}
