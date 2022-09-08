import {CollectionRequest} from "../requests/CollectionRequest";
import {ObjectResultResponse} from "../responses/ObjectResultResponse";
import {CollectionModel} from "../models/CollectionModel";
import {CriteriaRequest} from "../requests/CriteriaRequest";
import {DataTableResponse} from "../responses/DataTableResponse";
import httpClient from ".";

async function save(request: CollectionRequest): Promise<ObjectResultResponse<CollectionModel>> {
    return httpClient.post("/collections", {
        name: request.name,
        desc: request.desc,
        createBy: request.createBy,
        createDate: new Date(),
        updateBy: request.updateBy,
        updateDate: new Date(),
    });
}

async function update(id: number, request: CollectionRequest): Promise<ObjectResultResponse<CollectionModel>> {
    return httpClient.put(`/collections/${id}`, {
        name: request.name,
        desc: request.desc,
        createBy: request.createBy,
        createDate: request.createDate,
        updateBy: request.updateBy,
        updateDate: new Date(),
    });
}

async function deleteItem(id: number): Promise<any> {
    return httpClient.delete(`/collections/${id}`);
}

async function findById(id: number): Promise<ObjectResultResponse<CollectionModel>> {
    return httpClient.get(`/collections/${id}`);
}

async function findByCriteria(criteria: CriteriaRequest): Promise<DataTableResponse<CollectionModel>> {
    return httpClient.post("/collections/criteria", {
        criteria: criteria.criteria,
        orderBy: criteria.orderBy,
        pageSize: criteria.pageSize,
        pageIndex: criteria.pageIndex
    })
}

async function findByUser(userId: number): Promise<ObjectResultResponse<CollectionModel>> {
    return httpClient.get(`/collections/users/${userId}`)
}

export const collectionApi = {
    save,
    update,
    deleteItem,
    findById,
    findByCriteria,
    findByUser
}
