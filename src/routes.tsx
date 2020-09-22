import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList } from './Types'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/Home'
import ReleaseListScreen from './screens/ReleaseList'
import MovieListScreen from './screens/MovieList'

const Tab = createBottomTabNavigator<RootStackParamList>()

const wrapper = (Component: React.ComponentType<any>): any => {
    return (props: any) => (
        <>
            <Header />
            <Component {...props} />
            <Footer />
        </>
    )
}

const NavigatorScreens: React.FC = () => {
    const options: any = {
        release: { title: 'Lançamentos' },
        movie: { title: 'Filmes' },
    }

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">

                <Tab.Screen name="Home" component={wrapper(HomeScreen)} />

                <Tab.Screen name="Release" component={wrapper(ReleaseListScreen)} options={options.release} />

                <Tab.Screen name="Movie" component={wrapper(MovieListScreen)} options={options.movie} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default NavigatorScreens