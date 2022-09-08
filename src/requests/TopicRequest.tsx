import {AbstractRequest} from "./AbstractRequest";

export interface TopicRequest extends AbstractRequest {
    name: string,
    desc: string
}
