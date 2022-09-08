import React from "react";
import {Button, Col, Form, Input, Layout, Modal, Row, Space} from "antd";
import {FieldNameConstant} from "../../constants/FieldNameConstant";
import {ClearOutlined, RollbackOutlined, SaveOutlined, UploadOutlined} from "@ant-design/icons";
import {loadAllIcon} from "../../utils/LoadAllIcon";
// import listReactFiles from 'list-react-files'


const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 6},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
    },
};



export function MenuAdd() {

    // console.log("list name icon", loadRe);

    return (
        <Layout>
            <h1>Page: Add Menu</h1>
            <Row justify={"start"}>
                <Col span={"12"}>
                    <Form {...formItemLayout} id={"formAddWebItem"}>
                        <Form.Item label={FieldNameConstant.CODE}>
                            <Input name={FieldNameConstant.CODE}
                                   placeholder={FieldNameConstant.INPUT + FieldNameConstant.CODE}/>
                        </Form.Item>

                        <Form.Item label={FieldNameConstant.NAME}>
                            <Input name={FieldNameConstant.NAME}
                                   placeholder={FieldNameConstant.INPUT + FieldNameConstant.NAME}/>
                        </Form.Item>

                        <Form.Item label={FieldNameConstant.DESC}>
                            <Input name={FieldNameConstant.DESC}
                                   placeholder={FieldNameConstant.INPUT + FieldNameConstant.DESC}/>
                        </Form.Item>

                        <Form.Item label={FieldNameConstant.ICON}>
                            <Button type={"primary"} icon={<UploadOutlined />}>Choose Icon</Button>
                        </Form.Item>

                        <Form.Item wrapperCol={{offset: 6}}>
                            <Space>
                                <Button type={"primary"}
                                        icon={
                                            <SaveOutlined/>}>{FieldNameConstant.SAVE}</Button>
                                <Button type={"ghost"}
                                        icon={
                                            <ClearOutlined/>}>{FieldNameConstant.RESET}</Button>
                                <Button type={"dashed"}
                                        icon={
                                            <RollbackOutlined/>}>{FieldNameConstant.CANCEL}</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Layout>
    )
}

function ModelListIcon() {
    return (
        <Modal title={"List Icons"}>
            <div>
                {

                }
            </div>
        </Modal>
    )
}
