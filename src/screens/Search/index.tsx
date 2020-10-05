import * as React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, ConnectedProps } from 'react-redux';
import CardMovieDetail from '../../components/CardMovieDetail';
import HeaderSearch from '../../components/HeaderSearch'
import { RootState } from '../../storage/reducers';
import { fetchMovies } from '../../storage/actions'
import { styles } from './styles';
import { MovieItem } from '../../services/movie/types';
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

    const onPressCardMovie = React.useCallback((movie: MovieItem) => {
        navigation.navigate('MovieDetail', { movie })
    }, []);

    return (
        <View style={styles.container}>
            <HeaderSearch onChangeText={onChangeText} onPressBackPage={onPressBackPage} />

            <SafeAreaView style={styles.safeAreaView}>
                <FlatList
                    data={props.movies}
                    renderItem={(item: any) => <CardMovieDetail onPress={() => onPressCardMovie(item.item)} index={item.index} {...item.item} />}
                    keyExtractor={(item: any, index: number) => index.toString()}
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