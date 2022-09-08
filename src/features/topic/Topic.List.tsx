import React, {useEffect, useState} from "react";
import {Button, Col, Layout, Row, Space, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {CollectionModel} from "../../models/CollectionModel";
import {Link, useLocation} from "react-router-dom";
import {topicApi} from "../../api/Topic.api";
import {CriteriaRequest} from "../../requests/CriteriaRequest";
import {configConstant} from "../../constants/ConfigConstant";
import {dateTimeUtil} from "../../utils/DateTimeUtils";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons"

type CollectionProps = {
    items?: CollectionModel[],
}

type ColumnType = {
    key: string,
    id: number,
    name: string,
    desc: string,
}

const columns: ColumnsType<ColumnType> = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
        width: 20
    }, {
        title: "Name",
        dataIndex: "name",
        key: "name"
    }, {
        title: "Description",
        dataIndex: "desc",
        key: "desc",
    }, {
        title: "Create By",
        dataIndex: "createBy",
        key: "createBy",
    }, {
        title: "Create Date",
        dataIndex: "createDate",
        key: "createDate",
        render: value => (
            <>
                {dateTimeUtil.formatDateTime(value)}
            </>
        )
    }, {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <>
                <Space>
                    <Link to={"#"}>
                        <Button type={"primary"} icon={<EditOutlined/>} color={"blue"}>
                            Edit
                        </Button>
                    </Link>
                    <Link to={"#"}>
                        <Button danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Link>
                </Space>
            </>
        ),
    }
]

export function TopicList() {
    const [items, setItems] = useState<CollectionModel[]>();
    const [criteria, setCriteria] = useState<CriteriaRequest>({
        criteria: new Map<string, object>(),
        orderBy: [] as string[],
        pageIndex: configConstant.PAGE_START_INDEX,
        pageSize: configConstant.PAGE_SIZE
    })
    const location = useLocation();

    useEffect(() => {
        handleLoadTopic();
    }, []);

    const handleLoadTopic = () => {
        topicApi.findByCriteria(criteria)
            .then(data => {
                setItems(data.objects);
            })
            .catch(e => {
                console.error(e);
            });
    }


    return (
        <Layout>
            <Row style={{marginBottom: "15px"}} justify={"end"}>
                <Col>
                    <Link to={`${location.pathname}/add`}>
                        <Button type={"primary"}>ADD</Button>
                    </Link>
                </Col>
            </Row>
            <Table rowKey={"id"} columns={columns} dataSource={items} size={"small"}/>
        </Layout>
    )
}
