export interface IItemResult {
    text: string,
    isHistoric: boolean
}

export interface IPreviousResultSearchParams {
    results: IItemResult[]
    noResults?: boolean
    backgroundInitial?: boolean
    // eslint-disable-next-line no-unused-vars
    onPress: (result: IItemResult, isPutText: boolean) => void
}