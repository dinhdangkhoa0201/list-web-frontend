import httpClient from "./index";
import {CriteriaRequest} from "../requests/CriteriaRequest";
import {DataTableResponse} from "../responses/DataTableResponse";
import {IconModel} from "../models/IconModel";
import {ObjectResultResponse} from "../responses/ObjectResultResponse";

async function findAll(): Promise<ObjectResultResponse<IconModel>> {
    return httpClient.get("/icons");
}

async function findByCriteria(criteria: CriteriaRequest): Promise<DataTableResponse<IconModel>> {
    return httpClient.post("/icons/criteria", {
        criteria: criteria.criteria,
        orderBy: criteria.orderBy,
        pageSize: criteria.pageSize,
        pageIndex: criteria.pageIndex
    })
}

export const iconApi = {
    findAll,
    findByCriteria
}
