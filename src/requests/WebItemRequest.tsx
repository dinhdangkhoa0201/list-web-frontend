import {AbstractRequest} from "./AbstractRequest";

export interface WebItemRequest extends AbstractRequest {
    name: string,
    desc: string,
    url: string,
    imageUrl: string
}
