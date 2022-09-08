import {ObjectResultStatus} from "../enums/ObjectResultStatus";

export interface ObjectResultResponse<T> {
    object: T,
    objects: T[],
    status: ObjectResultStatus,
    message: string
}
