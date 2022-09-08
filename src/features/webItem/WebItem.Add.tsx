import React, {useState} from "react";
import {
    Button,
    Col,
    Form,
    Input,
    Layout,
    Row,
    Select,
    Space,
    Upload
} from "antd";
import {FieldNameConstant} from "../../constants/FieldNameConstant";
import ImgCrop from "antd-img-crop";
import {UploadFile, UploadProps} from "antd/es";
import {SaveOutlined, ClearOutlined, RollbackOutlined} from "@ant-design/icons"

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

const {Option} = Select;

export function WebItemAdd() {
    const [listSelectedTopic, setListSelectedTopic] = useState<React.ReactNode[]>();
    const [imageList, setImageList] = useState<UploadFile[]>()

    const handleSelectTopic = (item: string) => {
        console.log("handleSelectTopic", item);
        const children = listSelectedTopic;
        children?.push(item);
        setListSelectedTopic(children);
    }

    const handleChangeImage: UploadProps["onChange"] = ({fileList: newImage}) => {
        setImageList(newImage);
    }

    const handleReviewImage = async (file: any) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = () => resolve(reader.result);
            })
        }

        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    }

    return (
        <Layout>
            <h1>Add Web Item</h1>

            <Row justify={"start"}>
                <Col span={"12"}>
                    <Form {...formItemLayout} id={"formAddWebItem"}>
                        <Form.Item label={FieldNameConstant.NAME}>
                            <Input name={FieldNameConstant.NAME}
                                   placeholder={FieldNameConstant.INPUT + FieldNameConstant.NAME}/>
                        </Form.Item>

                        <Form.Item label={FieldNameConstant.URL}>
                            <Input name={FieldNameConstant.URL}
                                   placeholder={FieldNameConstant.INPUT + FieldNameConstant.URL}/>
                        </Form.Item>

                        <Form.Item name={FieldNameConstant.DESC}
                                   label={FieldNameConstant.DESC}>
                            <Input.TextArea allowClear showCount rows={5}
                                            maxLength={255}
                                            placeholder={FieldNameConstant.INPUT + FieldNameConstant.DESC}/>
                        </Form.Item>

                        <Form.Item name={FieldNameConstant.TOPIC}
                                   label={FieldNameConstant.TOPIC}>
                            <Select mode={"multiple"} allowClear
                                    placement={"bottomLeft"}
                                    placeholder={FieldNameConstant.SELECT + FieldNameConstant.TOPIC}
                                    onSelect={handleSelectTopic}>
                                <Option value={1}>option 1</Option>
                                <Option value={2}>option 2</Option>
                                <Option value={3}>option 3</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name={FieldNameConstant.IMAGE}
                                   label={FieldNameConstant.IMAGE}>
                            <ImgCrop rotate>
                                <Upload listType={"picture-card"}
                                        fileList={imageList}
                                        onChange={handleChangeImage}
                                        onPreview={handleReviewImage}>
                                    {imageList ? imageList.length < 5 && " + Upload" : "Upload"}
                                </Upload>
                            </ImgCrop>
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
