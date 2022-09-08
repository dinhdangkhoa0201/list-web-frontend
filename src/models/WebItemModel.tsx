import {AbstractModel} from "./AbstractModel";

export interface WebItemModel extends AbstractModel {
    name: string,
    desc: string,
    url: string,
    imageUrl: string
}
