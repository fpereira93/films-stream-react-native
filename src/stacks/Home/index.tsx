import * as React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { tabBarOptions } from './styles'
import HomeScreen from '../../screens/Home'
import ReleaseListScreen from '../../screens/ReleaseList'
import MovieListScreen from '../../screens/MovieList'
import SerieListScreen from '../../screens/SerieList'
import { RootStackParamList } from '../../routes/home-types'

const Tab = createBottomTabNavigator<RootStackParamList>()

const getOptionsTabScreen = (label: string, iconName: string) => {
    return {
        tabBarLabel: label,
        tabBarIcon: (params: any) => {
            const { color, size } = params
            return <MaterialCommunityIcons name={iconName} color={color} size={size} />
        },
    }
}

const HomeStackPage: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={tabBarOptions}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={getOptionsTabScreen('Home', 'home')}
            />

            <Tab.Screen
                name="Releases"
                component={ReleaseListScreen}
                options={getOptionsTabScreen('Lançamentos', 'fire')}
            />

            <Tab.Screen
                name="Movies"
                component={MovieListScreen}
                options={getOptionsTabScreen('Filmes', 'movie')}
            />

            <Tab.Screen
                name="Series"
                component={SerieListScreen}
                options={getOptionsTabScreen('Séries', 'filmstrip')}
            />
        </Tab.Navigator>
    )
}

export default HomeStackPage