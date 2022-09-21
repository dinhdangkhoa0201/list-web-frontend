import React, {useEffect, useState} from "react";
import {Button, Col, Layout, Row, Space, Table} from "antd";
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
import {IconGridView} from "./IconGridView";
import {ViewType} from "../../enums/ViewType";
import {IconGridViewScreen} from "../../enums/IconGridViewScreen";


type ColumnType = {
    key: string,
    name: string,
    fileName: string,
}

const columns: ColumnsType<ColumnType> = [
    {
        title: "Icon",
        key: "icon",
        width: 50,
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
        width: 220,
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
    const [items, setItems] = useState<IconModel[]>([]);
    const [paginationPageSize, setPaginationPageSize] = useState<number>(10);
    const [totalItem, setTotalItem] = useState<number>();
    const [viewType, setViewType] = useState<ViewType>(ViewType.TABLE);
    const [loading, setLoading] = useState<boolean>(false);
    const [criteria, setCriteria] = useState<CriteriaRequest>({
        criteria: {
            type: "Outlined"
        },
        orderBy: [],
        pageIndex: configConstant.PAGE_START_INDEX,
        // pageSize: configConstant.PAGE_SIZE
        pageSize: 100
    })
    const location = useLocation();

    useEffect(() => {
        handleLoadIcon();
    }, [criteria])

    const handleLoadIcon = () => {
        setLoading(true);
        iconApi.findByCriteria(criteria)
            .then(data => {
                setLoading(false);
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

    const handleChangeViewType = (viewType: ViewType) => {
        setViewType(viewType);
    }

    return (
        <Layout>
            <Row style={{marginBottom: "15px"}} justify={"end"}>
                <Col span={12}>
                    <Space>
                        <Button icon={<DynamicIcon type={"TableOutlined"}/>}
                                onClick={() => handleChangeViewType(ViewType.TABLE)}>
                            Table
                        </Button>
                        <Button icon={<DynamicIcon type={"AppstoreOutlined"}/>}
                                onClick={() => handleChangeViewType(ViewType.GRID)}>
                            Grid
                        </Button>
                    </Space>
                </Col>
                <Col span={12} style={{textAlign: "right"}}>
                    <Space>
                        <Link to={`${location.pathname}/add`}>
                            <Button type={"primary"}
                                    icon={<PlusCircleOutlined/>}>ADD</Button>
                        </Link>
                    </Space>
                </Col>
            </Row>
            {
                viewType === ViewType.TABLE ?
                    <Table rowKey={"id"} size={"small"} columns={columns}
                           loading={loading}
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
                           dataSource={items}
                           scroll={{
                               x: true,
                               y: 650
                           }}/>
                    :
                    <IconGridView listIcon={items} view={IconGridViewScreen.LIST}/>
            }
        </Layout>
    )
}
