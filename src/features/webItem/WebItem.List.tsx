import React, {useEffect, useState} from "react";
import {Button, Col, Layout, Row, Space, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {CollectionModel} from "../../models/CollectionModel";
import {WebItemModel} from "../../models/WebItemModel";
import {Link, useLocation} from "react-router-dom";
import {webItemApi} from "../../api/WebItem.api";
import {CriteriaRequest} from "../../requests/CriteriaRequest";
import {configConstant} from "../../constants/ConfigConstant";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

type WebItemProps = {
    items?: WebItemModel[],
}

type ColumnType = {
    key: string,
    name: string,
    desc: string,
    url: string
}

const columns: ColumnsType<ColumnType> = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    }, {
        title: "Description",
        dataIndex: "desc",
        key: "desc"
    }, {
        title: "URL",
        dataIndex: "url",
        key: "url",
        render: (_, record) => (
            <>
                <Button type={"link"} size={"small"}
                        onClick={() => handleRedirectUrl(record.url)}>{record.url}</Button>
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

const handleRedirectUrl = (url: string) => {
    window.open(url, "_blank");
}

export function WebItemList(props: WebItemProps) {
    const [items, setItems] = useState<WebItemModel[]>();
    const [criteria, setCriteria] = useState<CriteriaRequest>({
        criteria: {},
        orderBy: [] as string[],
        pageIndex: configConstant.PAGE_START_INDEX,
        pageSize: configConstant.PAGE_SIZE
    });
    const location = useLocation();

    useEffect(() => {
        handleLoadWebItem();
    }, []);

    const handleLoadWebItem = () => {
        webItemApi.findByCriteria(criteria)
            .then(data => {
                setItems(data.objects);
            })
            .catch(e => {

            })
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

            <Row>
                <Col span={"24"}>
                    <Table rowKey={"id"} size={"small"} columns={columns}
                           dataSource={items}/>
                </Col>
            </Row>
        </Layout>
    )
}
