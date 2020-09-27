import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "./stack"

export type ReleaseScreenRouteProp = RouteProp<RootStackParamList, 'Releases'>
export type ReleaseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Releases'>

export type PropsReleaseNavigator = {
    route: ReleaseScreenRouteProp
    navigation: ReleaseScreenNavigationProp
}