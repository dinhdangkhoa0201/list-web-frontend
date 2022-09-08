export interface CriteriaRequest {
    criteria: Map<string, object>,
    orderBy: string[],
    pageIndex: number,
    pageSize: number
}
