import * as React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { connect, ConnectedProps } from 'react-redux'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import Header from '../../src/components/Header'
import HomeStackPage from '../../src/stacks/home'
import SearchScreen from '../../src/screens/Search'
import { setDisplayHeader } from '../../src/storage/actions'
import { RootState } from '../../src/storage/reducers'

const HomeStack = createStackNavigator()

const StackScreens: React.FC = React.memo(() => {
    const screenOptions = { headerShown: false }

    return (
        <HomeStack.Navigator initialRouteName="HomeStack" screenOptions={screenOptions}>
            <HomeStack.Screen options={{ animationEnabled: false }} name="HomeStack" component={HomeStackPage} />
            <HomeStack.Screen options={{ animationEnabled: false }} name="Search" component={SearchScreen} />
        </HomeStack.Navigator>
    )
})

const getCurrentRouteName = (state: any): string | null => {
    if (!state) {
        return null
    }

    const route: any = state.routes[state.index]

    if (route.routes) {
        return getCurrentRouteName(route)
    }

    return route.name
}

const NavigatorScreens: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
    const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

    React.useEffect(() => {
        navigationRef.current?.addListener('state', (currentState) => {
            const routeName = getCurrentRouteName(currentState.data.state)

            props.setDisplayHeader(routeName === 'HomeStack')
        })
    }, [navigationRef.current])

    const onClickSearch = () => {
        navigationRef.current?.navigate('Search')
    }

    const insets = useSafeAreaInsets()

    const styleContainer = {
        marginTop: insets.top,
        marginBottom: insets.bottom,
        flex: 1,
    }

    return (
        <View style={styleContainer}>
            <NavigationContainer ref={navigationRef}>
                <Header
                    headerShown={props.displayHeader}
                    onClickSearch={onClickSearch}
                />
                <StackScreens />
            </NavigationContainer>
        </View>
    )
}

const mapStateToProps = (state: RootState) => ({
    displayHeader: state.header.display,
})

const connector = connect(mapStateToProps, { setDisplayHeader })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(NavigatorScreens);