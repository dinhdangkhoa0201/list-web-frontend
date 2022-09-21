import {Modal} from "antd";
import React from "react";
import {MenuModel} from "../../models/MenuModel";
import {IconGridView} from "../icon/IconGridView";
import {IconModel} from "../../models/IconModel";
import {IconGridViewScreen} from "../../enums/IconGridViewScreen";

type MenuModelProps = {
    open?: boolean,
    onCancel: any,
    listIcon: IconModel[]
}

export function MenuModal(props: MenuModelProps) {
    const {open, onCancel, listIcon} = props;

    const handleChooseMenu = (menu: MenuModel) => {
        console.log(menu);
    }

    return (
        <Modal title={"Icons"}
               open={open}
               onCancel={onCancel}
               width={1500}>
            <h1>Hello</h1>
            <IconGridView listIcon={listIcon}
                          view={IconGridViewScreen.MODAL}/>
        </Modal>
    )
}
