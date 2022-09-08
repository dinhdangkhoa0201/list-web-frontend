export interface DataTableResponse<T> {
    objects: T[],
    pageIndex: number,
    pageSize: number,
    total: number
}
