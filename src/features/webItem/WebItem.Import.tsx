import React, {useState} from "react";
import {Button, Col, Input, Layout, Row, Table} from "antd";
import {FieldNameConstant} from "../../constants/FieldNameConstant";
import {UploadOutlined} from "@ant-design/icons";
import {ColumnsType} from "antd/es/table";
import {WebItemImportModel} from "../../models/WebItemImportModel";

type ColumnType = {
    icon: string,
    name: string,
    url: string
}

const columns: ColumnsType<ColumnType> = [
    {
        title: "Icon",
        dataIndex: "icon",
        key: "icon"
    }, {
        title: "Name",
        dataIndex: "name",
        key: "name"
    }, {
        title: "URL",
        dataIndex: "url",
        key: "url"
    }, {
        title: "Type",
        dataIndex: "type",
        key: "type"
    }
]

export function WebItemImport() {

    const [dataSource, setDataSource] = useState<WebItemImportModel[]>([]);

    return (
        <Layout>
            <Row>
                <Col span={6}>
                    <Input.Group compact>
                        <Input style={{width: 'calc(100% - 200px)'}}
                               placeholder={FieldNameConstant.UPLOAD + " " + FieldNameConstant.FILE}
                               disabled/>
                        <Button type={"primary"} icon={
                            <UploadOutlined/>}>{FieldNameConstant.SELECT_FILE}</Button>
                    </Input.Group>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Table rowKey={"url"} columns={columns}
                           dataSource={dataSource}/>
                </Col>
            </Row>
        </Layout>
    )
}
