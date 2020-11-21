export interface IVirtualPaginationParams {
    // eslint-disable-next-line no-unused-vars
    getData: (currentPage: number) => Promise<any[]>
    numToRender?: number
    windowSize?: number
}