import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {Menu, MenuProps} from "antd";
import * as uuid from "uuid";
import {Link, Location} from "react-router-dom";
import {MenuModel} from "../models/MenuModel";
import DynamicIcon from "../utils/DynamicIcon";


type NavigationProps = {
    location: Location,
    listMenu: MenuModel[],
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: string, path?: string, children?: MenuItem[],): MenuItem {
    return {
        key: path,
        icon: icon ? <DynamicIcon type={icon}/> : "",
        label: path ? <Link to={path}>{label}</Link> : {label},
        children
    } as MenuItem
}

export function Navigation(props: NavigationProps) {
    const location = props.location;
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        const temp: MenuItem[] = props.listMenu.map(e => {
            return getItem(e.name, e.id, e.icon, e.path);
        });
        setMenuItems(temp);
    }, []);

    return (
        <Menu theme={"dark"} defaultSelectedKeys={["1"]} mode={"inline"}
              selectedKeys={[`/${location.pathname.split("/")[1]}`]}
              items={menuItems} onClick={(e) => e}/>
    )
}
