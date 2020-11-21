import * as React from 'react'
import { ListRenderItemInfo, Text, View, VirtualizedList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { IItemResult, IPreviousResultSearchParams } from './types'
import styles from './styles'
import { colors } from '../../constants/colors'
import ButtonIcon from '../ButtonIcon'
import { width } from '../../ultils/dimensions'

const PreviousResultSearch: React.FC<IPreviousResultSearchParams> = (props: IPreviousResultSearchParams) => {
    // console.log('# Render: PreviousResultSearch')

    const getItemCount = React.useCallback(() => {
        return props.results.length
    }, [props.results])

    const renderResult = React.useCallback((data: ListRenderItemInfo<IItemResult>) => {
        const result = data.item

        return (
            <View style={styles.containerLine}>
                <View style={styles.touchableContainer}>
                    <TouchableOpacity
                        style={styles.touchable}
                        onPress={() => props.onPress(result, false)}
                    >
                        <MaterialCommunityIcons
                            style={styles.iconHistoric}
                            name={result.isHistoric ? "history" : "magnify"}
                            color={colors.medium_gray_2}
                            size={25}
                        />

                        <Text style={styles.resultLineText}>
                            {result.text}
                        </Text>
                    </TouchableOpacity>
                </View>
                <ButtonIcon
                    style={styles.iconPutText}
                    icon={{
                        name: "arrow-left",
                        color: colors.medium_gray_2,
                        size: 23,
                    }}
                    onPress={() => props.onPress(result, true)}
                />
            </View>
        )
    }, [props.results])

    const getItem = React.useCallback((results: IItemResult[], index: number) => {
        return results[index]
    }, [props.results])

    const keyExtractor = React.useCallback((toRender: any, index: number) => {
        return index.toString()
    }, [props.results])

    const render = () => {
        if (props.noResults === true && props.results.length === 0) {
            return (
                <View>
                    <MaterialCommunityIcons
                        style={styles.iconSad}
                        name="emoticon-sad-outline"
                        color={colors.medium_gray}
                        size={width * 0.4}
                    />
                    <Text style={styles.noResultsText}>Nenhum resultado encontrado !</Text>
                </View>
            )
        }

        if (props.backgroundInitial === true) {
            return (
                <MaterialCommunityIcons
                    style={styles.iconCloudSearch}
                    name="cloud-search"
                    color={colors.medium_gray}
                    size={width * 0.4}
                />
            )
        }

        return (
            <VirtualizedList
                data={props.results}
                initialNumToRender={20}
                windowSize={5}
                renderItem={renderResult}
                keyExtractor={keyExtractor}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        )
    }

    return (
        <View style={styles.container}>
            { render() }
        </View>
    )
}

export default PreviousResultSearch