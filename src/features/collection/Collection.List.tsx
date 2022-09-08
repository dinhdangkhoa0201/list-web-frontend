import React, {useEffect, useState} from "react";
import {Button, Layout, Space, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {CollectionModel} from "../../models/CollectionModel";
import {Link} from "react-router-dom";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

type CollectionProps = {
    items?: CollectionModel[],
}

type ColumnType = {
    key: string,
    name: string,
    desc: string,
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

const data: CollectionModel[] = [
    {
        key: "123",
        id: 1,
        name: "Test 1",
        desc: "Test 1",
        createBy: "User",
        createDate: new Date(),
        updateBy: "User",
        updateDate: new Date()
    }
]

export function CollectionList(props: CollectionProps) {
    const [items, setItems] = useState<CollectionModel[]>();

    useEffect(() => {
        setItems(data);
    }, []);


    return (
        <Layout>
            <Table rowKey={"id"} size={"small"} columns={columns} dataSource={items}/>
        </Layout>
    )
}
