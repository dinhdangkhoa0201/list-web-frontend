import {AbstractRequest} from "./AbstractRequest";

export interface SystemConstantRequest extends AbstractRequest {
    code: string,
    desc: string,
    message: string
}
