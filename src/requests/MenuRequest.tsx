import {AbstractRequest} from "./AbstractRequest";

export interface MenuRequest extends AbstractRequest {
    indexId: number,
    code: string,
    name: string,
    objectName: string,
    desc: string,
    menuParentId: number
}
