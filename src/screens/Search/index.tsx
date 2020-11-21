import * as React from 'react'
import { ActivityIndicator, View } from 'react-native'
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
import VirtualPagination from '../../components/VirtualPagination'
import { colors } from '../../constants/colors'

interface PropsScreen extends PropsSearchsNavigator, PropsFromRedux { }

const SearchScreen: React.FC<PropsScreen> = (props: PropsScreen) => {
    // console.log('# Render: SearchScreen')

    const [showPreviousSearch, setShowPreviousSearch] = React.useState(true)
    const [isFirstSearch, setIsFirstSearch] = React.useState(true)

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
        setShowPreviousSearch(true)

        if (text.trim() === "") {
            setIsFirstSearch(true)
            props.clearFetchMovies()
        } else {
            setIsFirstSearch(false)
            props.fetchMovies(text)
        }
    }, [navigation])

    const onPressCardMovie = React.useCallback((movie: IMovieItem) => {
        navigation.navigate('MovieDetail', { movie })
    }, [props.movies])

    const onPressPreviusSearch = React.useCallback((result: IItemResult, isPutText: boolean) => {
        console.log(result, isPutText);
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

    const render = () => {
        if (props.researching) {
            return (
                <View style={styles.wrapperActivityIndicator}>
                    <ActivityIndicator
                        style={styles.activityIndicator}
                        size="large"
                        color={colors.main_color}
                    />
                </View>
            )
        }

        if (showPreviousSearch) {
            return (
                <PreviousResultSearch
                    backgroundInitial={isFirstSearch}
                    noResults={!isFirstSearch && mapResultsPreviusList.length === 0 && !props.researching}
                    onPress={onPressPreviusSearch}
                    results={mapResultsPreviusList}
                />
            )
        }

        return (
            <VirtualPagination
                numToRender={20}
                windowSize={20}
                getData={(currentPage: number): Promise<any[]> => {
                    console.log(`# AJAX: Realizando uma busca | page ${currentPage}`);

                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            console.log('# AJAX: Busca Finalizada')

                            if (props.movies.length && maxAjax) {
                                resolve(
                                    props.movies.map((movie: any) => (
                                        <CardMovieDetail
                                            onPress={onPressCardMovie}
                                            movie={{ ...movie }}
                                        />
                                    )),
                                )

                                maxAjax -= 1
                            } else {
                                resolve([])
                            }
                        }, 4000)
                    })
                }}
            />
        )
    }

    let maxAjax = 4

    return (
        <View style={styles.container}>
            <HeaderSearch onChangeText={onChangeText} onPressBackPage={onPressBackPage} />
            { render() }
        </View>
    )
}

const mapStateToProps = (state: RootState) => ({
    movies: state.fetchMovies.movies,
    researching: state.fetchMovies.researching,
})

const connector = connect(mapStateToProps, { fetchMovies, clearFetchMovies })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SearchScreen)