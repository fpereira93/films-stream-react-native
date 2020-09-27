import * as React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import Header from './src/components/Header'
import HomeStackPage from './src/stacks/Home'
import SearchScreen from './src/screens/Search'

const HomeStack = createStackNavigator()

const StackScreens: React.FC = () => {
    const screenOptions = { headerShown: false }

    return (
        <HomeStack.Navigator initialRouteName="HomeStack" screenOptions={screenOptions}>
            <HomeStack.Screen name="HomeStack" component={HomeStackPage} />
            <HomeStack.Screen name="Search" component={SearchScreen} />
        </HomeStack.Navigator>
    )
}

const StackScreensMemo = React.memo(StackScreens)

const NavigatorScreens: React.FC = () => {
    const [headerShown, setHeaderShown] = React.useState(true)

    const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

    React.useEffect(() => {
        navigationRef.current?.addListener('state', (currentState) => {
            const getCurrentRouteName = (navigationState: any): string | null => {
                if (!navigationState) return null;
                const route = navigationState.routes[navigationState.index];
                if (route.routes) return getCurrentRouteName(route);
                return route.name;
            };

            const routeName = getCurrentRouteName(currentState.data.state)

            setHeaderShown(routeName === 'HomeStack')
        })
    }, [navigationRef.current])

    const onClickSearch = () => {
        setHeaderShown(false)
        navigationRef.current?.navigate('Search')
    }

    return (
        <NavigationContainer ref={navigationRef}>
            <Header
                headerShown={headerShown}
                onClickSearch={onClickSearch}
            />
            <StackScreensMemo />
        </NavigationContainer>
    )
}

export default NavigatorScreens