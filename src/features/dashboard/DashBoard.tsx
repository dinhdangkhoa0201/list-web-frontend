import React from "react";
import {Button, Col, Layout, Row, Tooltip, Typography} from "antd";
import {CardItem} from "./CardItemProps";
import {EditOutlined} from "@ant-design/icons";
import {MenuModel} from "../../models/MenuModel";
import {dashboardApi} from "../../api/Dashboard.api";

const spanSize = 6;

type DashBoardProps = {
    listMenus: MenuModel[]
}

const countItem: string[] = [
    "MenuEntity"
]

export function DashBoard(props: DashBoardProps) {
    const listMenu = props.listMenus;

    const renderCountItem = (listMenu: MenuModel[]) => {
        return listMenu.map((e, index) => (
            <Col span={spanSize} key={`count-item-${index}`}>
                <CardItem title={e.name} icon={e.icon}
                          objectName={e.objectName}/>
            </Col>
        ))
    }

    return (
        <Layout>
            <Typography.Title level={4}>
                Dashboard Page
                <Tooltip title={"Edit dashboard"}>
                    <Button type={"text"} icon={<EditOutlined/>}/>
                </Tooltip>
            </Typography.Title>
            <Row gutter={[16, 16]}>
                {
                    renderCountItem(listMenu)
                }
            </Row>
        </Layout>
    )
}
