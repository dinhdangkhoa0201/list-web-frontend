import React, {useEffect, useState} from "react";
import {Button, Col, Form, Input, Layout, Modal, Row, Space} from "antd";
import {FieldNameConstant} from "../../constants/FieldNameConstant";
import {
    ClearOutlined,
    RollbackOutlined,
    SaveOutlined,
    UploadOutlined
} from "@ant-design/icons";
import {loadAllIcon} from "../../utils/LoadAllIcon";
import {MenuModal} from "./Menu.Modal";
import {IconModel} from "../../models/IconModel";
import {CriteriaRequest} from "../../requests/CriteriaRequest";
import {configConstant} from "../../constants/ConfigConstant";
import {iconApi} from "../../api/Icon.api";
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
    const [listMenu, setListMenu] = useState<IconModel[]>([]);
    const [openModel, setOpenModel] = useState<boolean>(false);
    const [criteriaMenu, setCriteriaMenu] = useState<CriteriaRequest>({
        criteria: {
            type: "Outlined"
        },
        orderBy: [],
        pageIndex: configConstant.PAGE_START_INDEX,
        // pageSize: configConstant.PAGE_SIZE
        pageSize: 100
    })

    useEffect(() => {
        handleLoadIcon();
    }, [criteriaMenu])

    const handleLoadIcon = () => {
        console.log(criteriaMenu);
        iconApi.findByCriteria(criteriaMenu)
            .then(data => {
                setListMenu(data.objects);
                // setPaginationPageSize(data.pageSize);
                // setTotalItem(data.total);
            })
            .catch(e => {
            })
    }

    const handleOpenModel = () => {
        setOpenModel(true);
    }

    const handleCloseModel = () => {
        setOpenModel(false);
    }

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
                            <Input.Group compact>
                                <Input name={FieldNameConstant.ICON}
                                       placeholder={FieldNameConstant.SELECT + FieldNameConstant.ICON}
                                       style={{width: 'calc(100% - 130px)'}}/>
                                <Button type={"primary"}
                                        icon={<UploadOutlined/>}
                                        onClick={() => handleOpenModel()}>Choose
                                    Icon
                                </Button>
                            </Input.Group>
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

            <MenuModal open={openModel}
                       onCancel={() => handleCloseModel()}
                       listIcon={listMenu}/>
        </Layout>
    )
}
