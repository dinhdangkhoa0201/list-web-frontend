import React, {useEffect, useState} from "react";
import {Avatar, Button, Col, Layout, Row, Space, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import DynamicIcon from "../../utils/DynamicIcon";
import {Link, useLocation} from "react-router-dom";
import {
    DeleteOutlined,
    EditOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";
import {CriteriaRequest} from "../../requests/CriteriaRequest";
import {configConstant} from "../../constants/ConfigConstant";
import {IconModel} from "../../models/IconModel";
import {iconApi} from "../../api/Icon.api";


type ColumnType = {
    key: string,
    name: string,
    fileName: string,
}

const columns: ColumnsType<ColumnType> = [
    {
        title: "Icon",
        key: "icon",
        render: (_, record) => (
            <div style={{textAlign: "center"}}>
                {/*<Avatar size={"large"} shape={"square"}*/}
                {/*        style={{backgroundColor: '#87d068'}}*/}
                {/*        icon={<DynamicIcon type={record.name}/>}/>*/}
                <DynamicIcon type={record.name}/>
            </div>
        )
    }, {
        title: "Name",
        dataIndex: "name",
        key: "name"
    }, {
        title: "File Name",
        dataIndex: "fileName",
        key: "fileName"
    }, {
        title: "Type",
        dataIndex: "type",
        key: "type"
    }, {
        title: "Action",
        key: "action",
        width: 30,
        render: (_, record) => (
            <>
                <Space>
                    <Link to={"#"}>
                        <Button type={"primary"} icon={<EditOutlined/>}
                                color={"blue"}>
                            Edit
                        </Button>
                    </Link>
                    <Link to={"#"}>
                        <Button danger icon={<DeleteOutlined/>}>
                            Delete
                        </Button>
                    </Link>
                </Space>
            </>
        ),
    }
]

export function IconList() {
    const [items, setItems] = useState<IconModel[]>();
    const [paginationPageSize, setPaginationPageSize] = useState<number>(10);
    const [totalItem, setTotalItem] = useState<number>();
    const [criteria, setCriteria] = useState<CriteriaRequest>({
        criteria: {
            type: "Outlined"
        },
        orderBy: [],
        pageIndex: configConstant.PAGE_START_INDEX,
        pageSize: configConstant.PAGE_SIZE
    })
    const location = useLocation();

    useEffect(() => {
        handleLoadIcon();
    }, [criteria])

    const handleLoadIcon = () => {
        console.log(criteria);
        iconApi.findByCriteria(criteria)
            .then(data => {
                setItems(data.objects);
                setPaginationPageSize(data.pageSize);
                setTotalItem(data.total);
            })
            .catch(e => {
            })
    }

    const handleChangePage = (pageSize: number, pageIndex: number) => {
        console.log("PageSize:", pageSize);
        console.log("PageIndex:", pageIndex);
        if (pageSize > -1 && pageIndex > -1) {
            setCriteria({
                ...criteria,
                pageSize,
                pageIndex
            });
        }
    }

    return (
        <Layout>
            <Row style={{marginBottom: "15px"}} justify={"end"}>
                <Col>
                    <Space>
                        <Link to={`${location.pathname}/add`}>
                            <Button type={"primary"}
                                    icon={<PlusCircleOutlined/>}>ADD</Button>
                        </Link>
                    </Space>
                </Col>
            </Row>
            <Table rowKey={"id"} size={"small"} columns={columns}
                   pagination={{
                       defaultPageSize: paginationPageSize,
                       pageSize: paginationPageSize,
                       total: totalItem,
                       showSizeChanger: true,
                       pageSizeOptions: ["10", "30", "50"],
                       onChange: (page, pageSize) => {
                           handleChangePage(pageSize, page - 1);
                       }
                   }}
                   dataSource={items}/>
        </Layout>
    )
}
