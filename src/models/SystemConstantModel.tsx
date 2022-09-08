import {AbstractModel} from "./AbstractModel";

export interface SystemConstantModel extends AbstractModel {
    code: string,
    desc: string,
    message: string
}
