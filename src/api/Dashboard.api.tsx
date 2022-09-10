import {ObjectResultResponse} from "../responses/ObjectResultResponse";
import httpClient from "./index";

async function count(objectName: string): Promise<ObjectResultResponse<number>> {
    return httpClient.get(`/dashboard/count`, {
        params: {
            object: objectName
        }
    })
}

export const dashboardApi = {
    count
}
