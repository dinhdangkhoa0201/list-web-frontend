import {AbstractRequest} from "./AbstractRequest";

export interface IconRequest extends AbstractRequest {
    name: string,
    fileName: string
}
