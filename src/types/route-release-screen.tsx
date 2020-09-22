import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "./route-stack"

export type ReleaseScreenRouteProp = RouteProp<RootStackParamList, 'Release'>
export type ReleaseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Release'>

export type PropsReleaseNavigator = {
    route: ReleaseScreenRouteProp
    navigation: ReleaseScreenNavigationProp
}