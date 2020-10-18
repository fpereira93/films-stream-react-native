import * as React from 'react'
import { View, VirtualizedList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, ConnectedProps } from 'react-redux';
import CardMovieDetail from '../../components/CardMovieDetail';
import HeaderSearch from '../../components/HeaderSearch'
import { RootState } from '../../storage/reducers';
import { fetchMovies } from '../../storage/actions'
import { styles } from './styles';
import { IMovieItem } from '../../services/movie/types';
import { PropsSearchsNavigator } from '../../routes/stack-types';

interface PropsScreen extends PropsSearchsNavigator, PropsFromRedux { }

const SearchScreen: React.FC<PropsScreen> = (props: PropsScreen) => {
    const { navigation } = props

    const onPressBackPage = React.useCallback(() => {
        navigation.goBack()
    }, [navigation])

    const onChangeText = React.useCallback((text: string) => {
        props.fetchMovies(text);
    }, [navigation])

    const onPressCardMovie = React.useCallback((movie: IMovieItem) => {
        navigation.navigate('MovieDetail', { movie })
    }, [props.movies]);

    const getItemCount = React.useCallback(() => {
        return props.movies.length
    }, [props.movies])

    const getItem = (movies: Array<IMovieItem>, index: number) => {
        return movies[index];
    }

    return (
        <View style={styles.container}>
            <HeaderSearch onChangeText={onChangeText} onPressBackPage={onPressBackPage} />

            <SafeAreaView style={styles.safeAreaView}>
                <VirtualizedList
                    data={props.movies}
                    initialNumToRender={10}
                    windowSize={30}
                    renderItem={(toRender: any) => {
                        return (
                            <CardMovieDetail
                                onPress={onPressCardMovie}
                                movie={toRender.item}
                            />
                        )
                    }}
                    keyExtractor={(item: any, index: number) => index.toString()}
                    getItemCount={getItemCount}
                    getItem={getItem}
                />
            </SafeAreaView>
        </View>
    )
}

const mapStateToProps = (state: RootState) => ({
    movies: state.fetchMovies.movies,
})

const connector = connect(mapStateToProps, { fetchMovies })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SearchScreen)