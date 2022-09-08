import {WebItemModel} from "../models/WebItemModel";
import {CriteriaRequest} from "../requests/CriteriaRequest";
import {WebItemRequest} from "../requests/WebItemRequest";
import {ObjectResultResponse} from "../responses/ObjectResultResponse";
import {DataTableResponse} from "../responses/DataTableResponse";
import httpClient from ".";

async function save(request: WebItemRequest): Promise<ObjectResultResponse<WebItemModel>> {
    return httpClient.post("/webItems", {
        name: request.name,
        desc: request.desc,
        url: request.url,
        imageUrl: request.imageUrl,
        createBy: request.createBy,
        createDate: new Date(),
        updateBy: request.updateBy,
        updateDate: new Date(),
    });
}

async function update(id: number, request: WebItemRequest): Promise<ObjectResultResponse<WebItemModel>> {
    return httpClient.put(`/webItems/${id}`, {
        name: request.name,
        desc: request.desc,
        url: request.url,
        imageUrl: request.imageUrl,
        createBy: request.createBy,
        createDate: request.createDate,
        updateBy: request.updateBy,
        updateDate: new Date(),
    });
}

async function deleteItem(id: number): Promise<any> {
    return httpClient.delete(`/webItems/${id}`);
}

async function findById(id: number): Promise<ObjectResultResponse<WebItemModel>> {
    return httpClient.get(`/webItems/${id}`);
}

async function findByCriteria(criteria: CriteriaRequest): Promise<DataTableResponse<WebItemModel>> {
    return httpClient.post("/webItems/criteria", {
        criteria: criteria.criteria,
        orderBy: criteria.orderBy,
        pageSize: criteria.pageSize,
        pageIndex: criteria.pageIndex
    })
}

async function findByTopic(topicId: number): Promise<ObjectResultResponse<WebItemModel>> {
    return httpClient.get(`/webItems/topic/${topicId}`);
}

async function findByCollection(collectionId: number): Promise<ObjectResultResponse<WebItemModel>> {
    return httpClient.get(`/webItems/topic/${collectionId}`);
}

export const webItemApi = {
    save,
    update,
    deleteItem,
    findById,
    findByCriteria,
    findByTopic,
    findByCollection
}
