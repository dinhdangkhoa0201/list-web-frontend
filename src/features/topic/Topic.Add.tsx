import React from "react";
import {Button, Col, Form, Input, Layout, Row, Space} from "antd";
import {FieldNameConstant} from "../../constants/FieldNameConstant";
import {ClearOutlined, RollbackOutlined, SaveOutlined} from "@ant-design/icons";

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

export function TopicAdd() {

    return (
        <Layout>
            <Row justify={"start"}>
                <Col span={"12"}>
                    <Form {...formItemLayout} id={"formAddWebItem"}>
                        <Form.Item label={FieldNameConstant.NAME}>
                            <Input name={FieldNameConstant.NAME}
                                   placeholder={FieldNameConstant.INPUT + FieldNameConstant.NAME}/>
                        </Form.Item>

                        <Form.Item name={FieldNameConstant.DESC}
                                   label={FieldNameConstant.DESC}>
                            <Input.TextArea allowClear showCount rows={5}
                                            maxLength={255}
                                            placeholder={FieldNameConstant.INPUT + FieldNameConstant.DESC}/>
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
