import * as React from 'react'
import { ActivityIndicator, ListRenderItemInfo, NativeScrollEvent, NativeSyntheticEvent, VirtualizedList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import styles from './styles';
import { IVirtualPaginationParams } from './types';

const VirtualPagination: React.FC<IVirtualPaginationParams> = (params: IVirtualPaginationParams) => {
    // console.log('# Render: VirtualPagination');

    const [canSearchMore, setCanSearchMore] = React.useState(true)
    const [searchInProgress, setSearchInProgress] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(0)
    const [dataConcated, setDataConcated] = React.useState<any[]>([])

    React.useEffect(() => {
        setSearchInProgress(true)

        params.getData(currentPage).then((response: any[]) => {
            if (response.length) {
                setDataConcated([...dataConcated, ...response])
            } else {
                setCanSearchMore(false)
            }
        }).finally(() => {
            setSearchInProgress(false)
        })
    }, [currentPage])

    const renderResult = (data: ListRenderItemInfo<any>) => {
        return data.item
    }

    const keyExtractor = (toRender: any, index: number) => {
        return index.toString()
    }

    const getItemCount = () => {
        return dataConcated.length
    }

    const getItem = (results: any[], index: number) => {
        return results[index]
    }

    return (
        <SafeAreaView style={styles.container}>
            <VirtualizedList
                data={dataConcated}
                initialNumToRender={params.numToRende ?? 10}
                windowSize={params.windowSize ?? 5}
                renderItem={renderResult}
                keyExtractor={keyExtractor}
                getItemCount={getItemCount}
                getItem={getItem}
                onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
                    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent
                    const paddingToBottom = 5
                    const isEndScroll = layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom

                    if (isEndScroll && !searchInProgress && canSearchMore) {
                        setCurrentPage(currentPage + 1)
                    }
                }}
            />

            {
                searchInProgress ? (
                    <ActivityIndicator style={styles.containerActivityIndicator} size="large" color={colors.main_color} />
                ) : null
            }
        </SafeAreaView>
    )
}

export default VirtualPagination;