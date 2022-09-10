import {AbstractModel} from "./AbstractModel";

export interface MenuModel extends AbstractModel {
    indexId: number,
    code: string,
    name: string,
    objectName: string,
    desc: string,
    menuParentId: number,
    path: string,
    icon: string
}
