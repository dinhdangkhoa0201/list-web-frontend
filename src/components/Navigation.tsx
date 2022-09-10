import React, {useEffect, useState} from "react";
import {Card, Col, Menu, MenuProps, Row} from "antd";
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
        children,
    } as MenuItem
}

function renderMenuCardItem(menuItem: MenuModel) {
    return (
        <Menu.Item key={menuItem.path}>
            <Card>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Card>
        </Menu.Item>
    )
}

export function Navigation(props: NavigationProps) {
    const location = props.location;
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        const temp: MenuItem[] = props.listMenu.map(e => {
            return getItem(e.name, e.id, e.icon, e.path);
        });
        setMenuItems(temp);
        console.log(props.listMenu);
    }, []);

    return (
        <Menu theme={"light"} defaultSelectedKeys={["1"]} mode={"inline"}
              selectedKeys={[`/${location.pathname.split("/")[1]}`]}
              items={menuItems} onClick={(e) => e}>

        </Menu>
    )
}
