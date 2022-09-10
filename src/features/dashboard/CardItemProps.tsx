import React, {useEffect, useState} from "react";
import {Avatar, Card, Col, Row, Statistic, Typography} from "antd";
import DynamicIcon from "../../utils/DynamicIcon";
import {dashboardApi} from "../../api/Dashboard.api";

type CardItemProps = {
    title: string,
    icon: string,
    objectName: string
}

export function CardItem(props: CardItemProps) {
    const [value, setValue] = useState<number>();
    const [loading, setLoading] = useState<boolean>();

    useEffect(() => {
        setLoading(true);
        dashboardApi.count(props.objectName)
            .then(data => {
                setLoading(false);
                setValue(data.object);
            })
            .catch(err => {

            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        <Card style={{borderRadius: "16px"}} loading={loading}>
            <Row>
                <Col span={20}>
                    <Statistic title={
                        <Typography.Text strong={true}>
                            {props.title}
                        </Typography.Text>
                    } value={value}
                               prefix={<DynamicIcon type={props.icon}/>}/>
                </Col>
                <Col span={4}
                     style={{alignContent: "middle", alignSelf: "center"}}>
                    <Avatar size={"large"} shape={"square"}
                            icon={<DynamicIcon type={props.icon}/>}
                            style={{borderRadius: "8px"}}/>
                </Col>
            </Row>
        </Card>
    )
}
