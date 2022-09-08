import httpClient from "./index";
import {CriteriaRequest} from "../requests/CriteriaRequest";
import {MenuRequest} from "../requests/MenuRequest";
import {MenuModel} from "../models/MenuModel";
import {DataTableResponse} from "../responses/DataTableResponse";
import {ObjectResultResponse} from "../responses/ObjectResultResponse";

async function save(request: MenuRequest): Promise<MenuModel> {
    return httpClient.post("/menus", {
        indexId: request.indexId,
        code: request.code,
        name: request.name,
        desc: request.desc,
        createBy: request.createBy,
        createDate: new Date(),
        updateBy: request.updateBy,
        updateDate: new Date(),
    })
}

async function update(id: number, request: MenuRequest): Promise<MenuModel> {
    return httpClient.put(`/menus/${id}`, {
        indexId: request.indexId,
        code: request.code,
        name: request.name,
        desc: request.desc,
        createBy: request.createBy,
        createDate: new Date(),
        updateBy: request.updateBy,
        updateDate: new Date(),
    })
}

async function deleteItem(id: number) {
    return httpClient.delete(`/menus/${id}`)
}

async function findByCode(code: string): Promise<MenuModel> {
    return httpClient.get("/menus/code", {
        params: {
            code: code
        }
    })
}

async function findByCriteria(criteria: CriteriaRequest): Promise<DataTableResponse<MenuModel>> {
    return httpClient.post("/menus/criteria", {
        criteria: criteria.criteria,
        orderBy: criteria.orderBy,
        pageSize: criteria.pageSize,
        pageIndex: criteria.pageIndex
    })
}

async function findAll(): Promise<ObjectResultResponse<MenuModel>> {
    return httpClient.get("/menus");
}

async function saveByOrder(mapIndexId: Map<number, number>): Promise<ObjectResultResponse<MenuModel>> {
    return httpClient.post("/menus/order", {
        mapIndexId
    });
}

export const menuApi = {
    save,
    update,
    deleteItem,
    findByCode,
    findByCriteria,
    findAll,
    saveByOrder
}
