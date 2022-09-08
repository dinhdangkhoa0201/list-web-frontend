import httpClient from "./index";
import {CriteriaRequest} from "../requests/CriteriaRequest";
import {MenuRequest} from "../requests/MenuRequest";
import {MenuModel} from "../models/MenuModel";
import {DataTableResponse} from "../responses/DataTableResponse";
import {ObjectResultResponse} from "../responses/ObjectResultResponse";
import {SystemConstantRequest} from "../requests/SystemConstantRequest";
import {SystemConstantModel} from "../models/SystemConstantModel";

async function save(request: SystemConstantRequest): Promise<SystemConstantModel> {
    return httpClient.post("/systemConstants", {
        code: request.code,
        desc: request.desc,
        createBy: request.createBy,
        createDate: new Date(),
        updateBy: request.updateBy,
        updateDate: new Date(),
    })
}

async function update(id: number, request: SystemConstantRequest): Promise<SystemConstantModel> {
    return httpClient.put(`/systemConstants/${id}`, {
        code: request.code,
        desc: request.desc,
        createBy: request.createBy,
        createDate: new Date(),
        updateBy: request.updateBy,
        updateDate: new Date(),
    })
}

async function deleteItem(id: number) {
    return httpClient.delete(`/systemConstants/${id}`)
}

async function findByCode(code: string): Promise<SystemConstantModel> {
    return httpClient.get("/systemConstants/code", {
        params: {
            code: code
        }
    })
}

async function findByCriteria(criteria: CriteriaRequest): Promise<DataTableResponse<SystemConstantModel>> {
    return httpClient.post("/systemConstants/criteria", {
        criteria: criteria.criteria,
        orderBy: criteria.orderBy,
        pageSize: criteria.pageSize,
        pageIndex: criteria.pageIndex
    })
}

async function findAll(): Promise<ObjectResultResponse<SystemConstantModel>> {
    return httpClient.get("/systemConstants");
}

export const systemConstantApi = {
    save,
    update,
    deleteItem,
    findByCode,
    findByCriteria,
    findAll,
}
