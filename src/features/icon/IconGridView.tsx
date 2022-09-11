import React from "react";
import {Avatar, Card, Col, Layout, Row, Space, Typography} from "antd";
import {IconModel} from "../../models/IconModel";
import DynamicIcon from "../../utils/DynamicIcon";

type IconGridViewProps = {
    listIcon: IconModel[]
}

export function IconGridView(props: IconGridViewProps) {
    const listIcon = props.listIcon;

    const renderListIcon = (listIcon: IconModel[]) => {
        return listIcon.map(e => {
            return (
                <Col span={3} style={{textAlign: "center"}}>
                    <Card>
                        <Space direction={"vertical"}>
                            <DynamicIcon type={e.name}
                                         style={{fontSize: "30px"}}/>
                            <Typography.Text>
                                {e.name}
                            </Typography.Text>
                        </Space>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <Layout style={{overflowY: "scroll", height: "740px"}}>
            <Row>
                {
                    renderListIcon(listIcon)
                }
            </Row>
        </Layout>
    )
}
