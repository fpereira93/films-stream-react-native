import * as React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'
import HomeStackPage from '../../src/stacks/home'
import SearchScreen from '../../src/screens/Search'
import MovieDetailScreen from '../screens/MovieDetail'
import { StackParamList } from './stack-types'

const HomeStack = createStackNavigator<StackParamList>()

const NavigatorScreens: React.FC = () => {
    const insets = useSafeAreaInsets()

    const styleContainer = {
        marginTop: insets.top,
        marginBottom: insets.bottom,
        flex: 1,
    }

    const screenOptions = { headerShown: false }

    return (
        <View style={styleContainer}>
            <NavigationContainer>
                <HomeStack.Navigator initialRouteName="HomeStack" screenOptions={screenOptions}>
                    <HomeStack.Screen
                        name="HomeStack"
                        component={HomeStackPage}
                    />

                    <HomeStack.Screen
                        name="Search"
                        component={SearchScreen}
                    />

                    <HomeStack.Screen
                        name="MovieDetail"
                        component={MovieDetailScreen}
                    />
                </HomeStack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default NavigatorScreens