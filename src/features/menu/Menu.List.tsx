import React, {useEffect, useState} from "react";
import {Avatar, Button, Col, Layout, Row, Space, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {MenuModel} from "../../models/MenuModel";
import {CriteriaRequest} from "../../requests/CriteriaRequest";
import {configConstant} from "../../constants/ConfigConstant";
import {menuApi} from "../../api/Menu.api";
import {
    SortableContainer,
    SortableContainerProps,
    SortableElement,
    SortableHandle,
    SortEnd
} from "react-sortable-hoc";
import {
    DeleteOutlined,
    EditOutlined,
    MenuOutlined,
    SaveOutlined,
    WarningOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import {arrayMoveImmutable} from "array-move";
import {Link, useLocation} from "react-router-dom";
import DynamicIcon from "../../utils/DynamicIcon";

type ColumnType = {
    key: string,
    name: string,
    desc: string,
    icon: string
}

const DragHandle = SortableHandle(() =>
    <MenuOutlined
        style={{cursor: "grab", color: "#999"}}/>);


const columns: ColumnsType<ColumnType> = [
    {
        title: "Sort",
        dataIndex: "sort",
        width: 50,
        className: "drag-visible",
        render: () => <Space align={"center"}>
            <DragHandle/>
        </Space>
    }, {
        title: "Index",
        dataIndex: "indexId",
        key: "indexId"
    }, {
        title: "Icon",
        key: "icon",
        render: (_, record) => (
            <div>
                <Avatar size={"large"} shape={"square"}
                        style={{backgroundColor: '#87d068'}}
                        icon={<DynamicIcon type={record.icon}/>}/>
            </div>
        )
    }, {
        title: "Code",
        dataIndex: "code",
        key: "code"
    }, {
        title: "Name",
        dataIndex: "name",
        key: "name"
    }, {
        title: "Description",
        dataIndex: "desc",
        key: "desc"
    }, {
        title: "Path",
        dataIndex: "path",
        key: "path"
    }, {
        title: "Action",
        key: "action",
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

const SortableItem = SortableElement((props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr {...props}/>
));
const SortableBody = SortableContainer((props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} />
))

export function MenuList() {
    const [items, setItems] = useState<MenuModel[]>();
    const [criteria, setCriteria] = useState<CriteriaRequest>({
        criteria: {},
        orderBy: ["indexId"],
        pageIndex: configConstant.PAGE_START_INDEX,
        pageSize: configConstant.PAGE_SIZE
    })
    const location = useLocation();

    useEffect(() => {
        handleLoadMenu();
    }, [])

    const handleLoadMenu = () => {
        menuApi.findByCriteria(criteria)
            .then(data => {
                setItems(data.objects);
            })
            .catch(e => {
            })
    }

    const handleSaveListMenu = () => {
        const listTemp: Map<number, number> = new Map<number, number>();
        items?.forEach(e => {
            listTemp.set(e.id, e.indexId);
        })
        menuApi.saveByOrder(listTemp)
            .then(data => {

            })
            .catch(e => {
                console.log(e);
            });
    }

    const onSortEnd = ({oldIndex, newIndex}: SortEnd) => {
        if (items !== undefined && items.length > 0) {
            if (oldIndex !== newIndex) {
                const newData = arrayMoveImmutable(items.slice(), oldIndex, newIndex).filter(
                    (el) => !!el
                );
                newData.forEach((item, index) => {
                    item.indexId = index + 1;
                });
                setItems(newData);
            }
        }
    }

    const DraggableContainer = (props: SortableContainerProps) => (
        <SortableBody useDragHandle disableAutoscroll
                      helperClass={"row-dragging"} onSortEnd={onSortEnd}
                      {...props}/>
    );

    const DraggableBodyRow: React.FC<any> = ({
                                                 className,
                                                 style,
                                                 ...restProps
                                             }) => {
        if (items !== undefined && items.length > 0) {
            const index = items?.findIndex(x => x.indexId === restProps["data-row-key"]);
            return <SortableItem index={index} {...restProps}/>
        }
        return null;
    }

    return (
        <Layout>
            <h1>Menu List</h1>
            <Row style={{marginBottom: "15px"}} justify={"end"}>
                <Col>
                    <Space>
                        <Button type={"primary"} icon={<SaveOutlined/>}
                                onClick={() => handleSaveListMenu()}>SAVE</Button>
                        <Link to={`${location.pathname}/add`}>
                            <Button type={"primary"}
                                    icon={<PlusCircleOutlined/>}
                                    onClick={() => handleSaveListMenu()}>ADD</Button>
                        </Link>
                    </Space>
                </Col>
            </Row>
            <Table rowKey={"indexId"} size={"small"} columns={columns}
                   dataSource={items}
                   components={{
                       body: {
                           wrapper: DraggableContainer,
                           row: DraggableBodyRow
                       }
                   }}/>
        </Layout>
    )
}
