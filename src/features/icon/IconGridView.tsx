import React, {useEffect} from "react";
import {Card, Col, Layout, Row, Space, Typography} from "antd";
import {IconModel} from "../../models/IconModel";
import DynamicIcon from "../../utils/DynamicIcon";
import {IconGridViewScreen} from "../../enums/IconGridViewScreen";

type IconGridViewProps = {
    listIcon: IconModel[],
    view: IconGridViewScreen,
    chooseMenu?: any
}

export function IconGridView(props: IconGridViewProps) {
    const {listIcon, view, chooseMenu} = props;
    // const [heightType, setHeightType] = useState<IconGridViewScreen>(IconGridViewScreen.LIST);
    // const [height, setHeight] = useState<number>(740);

    useEffect(() => {

    }, [])

    const renderListIcon = (listIcon: IconModel[]) => {
        return listIcon.map(e => {
            return (
                <Col span={3} style={{textAlign: "center"}}>
                    <Card>
                        <Space direction={"vertical"}>
                            <DynamicIcon type={e.name}
                                         style={{fontSize: "30px"}}/>
                            <Typography.Text>
                                {e.name}
                            </Typography.Text>
                        </Space>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <Layout style={{
            overflowY: "scroll",
            height: view === IconGridViewScreen.LIST ? 740 : 500
        }}>
            <Row>
                {
                    renderListIcon(listIcon)
                }
            </Row>
        </Layout>
    )
}
