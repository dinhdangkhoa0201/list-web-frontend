import {CriteriaRequest} from "../requests/CriteriaRequest";
import {TopicRequest} from "../requests/TopicRequest";
import {TopicModel} from "../models/TopicModel";
import {ObjectResultResponse} from "../responses/ObjectResultResponse";
import {DataTableResponse} from "../responses/DataTableResponse";
import httpClient from "./index";

async function save(request: TopicRequest): Promise<ObjectResultResponse<TopicModel>> {
    return httpClient.post("/topics", {
        name: request.name,
        desc: request.desc,
        createBy: request.createBy,
        createDate: new Date(),
        updateBy: request.updateBy,
        updateDate: new Date(),
    });
}

async function update(id: number, request: TopicRequest): Promise<ObjectResultResponse<TopicModel>> {
    return httpClient.put(`/topics/${id}`, {
        name: request.name,
        desc: request.desc,
        createBy: request.createBy,
        createDate: request.createDate,
        updateBy: request.updateBy,
        updateDate: new Date(),
    });
}

async function deleteItem(id: number): Promise<any> {
    return httpClient.delete(`/topics/${id}`);
}

async function findById(id: number): Promise<ObjectResultResponse<TopicModel>> {
    return httpClient.get(`/topics/${id}`);
}

async function findByCriteria(criteria: CriteriaRequest): Promise<DataTableResponse<TopicModel>> {
    return httpClient.post(`/topics/criteria`, {
        criteria: criteria.criteria,
        orderBy: criteria.orderBy,
        pageSize: criteria.pageSize,
        pageIndex: criteria.pageIndex
    });
}

export const topicApi = {
    save,
    update,
    deleteItem,
    findByCriteria,
    findById
}
