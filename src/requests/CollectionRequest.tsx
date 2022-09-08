import {AbstractRequest} from "./AbstractRequest";

export interface CollectionRequest extends AbstractRequest {
    name: string,
    desc: string
}
