import * as React from 'react'
import { ListRenderItemInfo, View, VirtualizedList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect, ConnectedProps } from 'react-redux'
import CardMovieDetail from '../../components/CardMovieDetail'
import HeaderSearch from '../../components/HeaderSearch'
import { RootState } from '../../storage/reducers'
import { fetchMovies, clearFetchMovies } from '../../storage/actions'
import { styles } from './styles'
import { IMovieItem } from '../../services/movie/types'
import { PropsSearchsNavigator } from '../../routes/stack-types'
import PreviousResultSearch from '../../components/PreviousResultSearch'
import { IItemResult } from '../../components/PreviousResultSearch/types'

interface PropsScreen extends PropsSearchsNavigator, PropsFromRedux { }

const SearchScreen: React.FC<PropsScreen> = (props: PropsScreen) => {
    // console.log('# Render: SearchScreen')

    const [showPreviousSearch, setShowPreviousSearch] = React.useState(true)

    const { navigation } = props

    React.useEffect(() => {
        return () => {
            props.clearFetchMovies()
        }
    }, [])

    const onPressBackPage = React.useCallback(() => {
        navigation.goBack()
    }, [navigation])

    const onChangeText = React.useCallback((text: string) => {
        props.fetchMovies(text)
    }, [navigation])

    const onPressCardMovie = React.useCallback((movie: IMovieItem) => {
        navigation.navigate('MovieDetail', { movie })
    }, [props.movies])

    const getItemCount = React.useCallback(() => {
        return props.movies.length
    }, [props.movies])

    const getItem = React.useCallback((movies: Array<IMovieItem>, index: number) => {
        return movies[index]
    }, [props.movies])

    // eslint-disable-next-line no-unused-vars
    const onPressPreviusSearch = React.useCallback((result: IItemResult, isPutText: boolean) => {
        setShowPreviousSearch(false)
    }, [props.movies])

    const mapResultsPreviusList = React.useMemo(() => {
        return props.movies.map((item: IMovieItem, index: number) => {
            return {
                text: item.title,
                isHistoric: index % 2 === 0,
            }
        })
    }, [props.movies])

    const renderItem = React.useCallback((data: ListRenderItemInfo<IMovieItem>) => {
        return (
            <CardMovieDetail
                onPress={onPressCardMovie}
                movie={data.item}
            />
        )
    }, [props.movies])

    const keyExtractor = React.useCallback((toRender: any, index: number) => {
        return index.toString()
    }, [props.movies])

    return (
        <View style={styles.container}>
            <HeaderSearch onChangeText={onChangeText} onPressBackPage={onPressBackPage} />

            {
                showPreviousSearch ? (
                    <PreviousResultSearch
                        onPress={onPressPreviusSearch}
                        noResults={false}
                        results={mapResultsPreviusList}
                    />
                ) : null
            }

            <SafeAreaView
                style={[
                    styles.safeAreaView,
                    { display: showPreviousSearch ? "none" : "flex" },
                ]}
            >
                <VirtualizedList
                    data={props.movies}
                    initialNumToRender={10}
                    windowSize={10}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
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

const connector = connect(mapStateToProps, { fetchMovies, clearFetchMovies })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SearchScreen)