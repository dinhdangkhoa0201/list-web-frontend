import {AbstractRequest} from "./AbstractRequest";

export interface MenuRequest extends AbstractRequest {
    indexId: number,
    code: string,
    name: string,
    desc: string,
    menuParentId: number
}
