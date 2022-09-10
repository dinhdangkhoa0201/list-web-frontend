import React, {useEffect, useState} from "react";
import {Button, Col, Layout, Row, Space, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {MenuModel} from "../../models/MenuModel";
import {CriteriaRequest} from "../../requests/CriteriaRequest";
import {configConstant} from "../../constants/ConfigConstant";
import {DeleteOutlined, EditOutlined, SaveOutlined} from "@ant-design/icons";
import {systemConstantApi} from "../../api/SystemConstant.api";
import {SystemConstantModel} from "../../models/SystemConstantModel";
import {Link} from "react-router-dom";

type ColumnType = {
    key: string,
    code: string,
    desc: string,
    message: string
}

const columns: ColumnsType<ColumnType> = [
    {
        title: "Code",
        dataIndex: "code",
        key: "code"
    }, {
        title: "Description",
        dataIndex: "desc",
        key: "desc"
    }, {
        title: "Message",
        dataIndex: "message",
        key: "message"
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

export function SystemConstantList() {
    const [items, setItems] = useState<SystemConstantModel[]>();
    const [criteria, setCriteria] = useState<CriteriaRequest>({
        criteria: {},
        orderBy: [] as string[],
        pageIndex: configConstant.PAGE_START_INDEX,
        pageSize: configConstant.PAGE_SIZE
    })

    useEffect(() => {
        handleLoadListSystemConstant()
    }, []);

    const handleLoadListSystemConstant = () => {
        systemConstantApi.findByCriteria(criteria)
            .then(data => {
                setItems(data.objects);
            })
            .catch(e => {

            })
    }

    return (
        <Layout>
            <h1>System Constant List</h1>
            <Row style={{marginBottom: "15px"}} justify={"end"}>
                <Col>
                    <Button type={"primary"} icon={<SaveOutlined/>}>ADD</Button>
                </Col>
            </Row>
            <Table rowKey={"id"} size={"small"} columns={columns}
                   dataSource={items}/>
        </Layout>
    )
}
