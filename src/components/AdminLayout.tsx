import React, {useEffect, useState} from "react";
import {Col, Layout, Row} from "antd";
import {Navigation} from "./Navigation";
import {Route, Routes, useLocation} from "react-router-dom";
import {Collection} from "../features/collection/Collection";
import {Topic} from "../features/topic/Topic";
import {User} from "../features/user/User";
import {WebItem} from "../features/webItem/WebItem";
import {Menu} from "../features/menu/Menu";
import {MenuModel} from "../models/MenuModel";
import {menuApi} from "../api/Menu.api";
import {PageWaiting} from "./PageWaiting";
import {SystemConstant} from "../features/systemConstant/SystemConstant";
import {DashBoard} from "../features/dashboard/DashBoard";
import {HeaderComponent} from "./HeaderComponent";
import {Icon} from "../features/icon/Icon";

const {Header, Content, Sider, Footer} = Layout;

export function AdminLayout() {
    const [collapse, setCollapse] = useState(false);
    const location = useLocation();
    const [listMenu, setListMenu] = useState<MenuModel[]>([]);
    const [busy, setBusy] = useState<boolean>(true);
    const [mapMenuPath, setMapMenuPath] = useState<Map<string, string>>(new Map<string, string>());

    useEffect(() => {
        setBusy(true);
        handleLoadListMenu();
    }, [])

    const handleLoadListMenu = () => {
        menuApi.findAll()
            .then(data => {
                setListMenu(data.objects);
                handleMapMenuPath(data.objects);
                setBusy(false);
            })
            .catch(e => {

            })
    }

    const handleMapMenuPath = (listMenu: MenuModel[]) => {
        const map: Map<string, string> = new Map<string, string>();
        map.set("", "Home");
        listMenu.forEach(e => {
            map.set(e.path, e.name);
        });
        setMapMenuPath(map);
    }

    return (
        <Layout style={{minHeight: "100vh"}}>
            {
                busy ?
                    <Row style={{minHeight: "100vh"}} justify={"center"}
                         align={"middle"}>
                        <Col offset={"12"}>
                            <PageWaiting/>
                        </Col>
                    </Row>
                    :
                    <>
                        {/* Navigation */}
                        <Sider collapsible collapsed={collapse} theme={"light"}
                               onCollapse={value => setCollapse(value)}>
                            <Layout id="logo">

                            </Layout>
                            <Navigation location={location}
                                        listMenu={listMenu}/>
                        </Sider>
                        {/*/Navigation*/}

                        <Layout>
                            {/* Header */}
                            <Header style={{
                                background: "#f0f2f5",
                                paddingLeft: 15,
                                paddingTop: 10
                            }}>
                                <HeaderComponent location={location}
                                                 menuMapPath={mapMenuPath}/>
                            </Header>
                            {/* /Header */}

                            {/* Content */}
                            <Content style={{margin: "15px"}}>
                                <Routes>
                                    <Route path={""} element={<DashBoard
                                        listMenus={listMenu}/>}/>
                                    <Route path={"/collections/*"}
                                           element={<Collection/>}/>
                                    <Route path={"/topics/*"}
                                           element={<Topic/>}/>
                                    <Route path={"/users/*"} element={<User/>}/>
                                    <Route path={"/webItems/*"}
                                           element={<WebItem/>}/>
                                    <Route path={"/menus/*"} element={<Menu/>}/>
                                    <Route path={"/icons/*"} element={<Icon/>}/>
                                    <Route path={"/systemConstants/*"}
                                           element={<SystemConstant/>}/>
                                </Routes>
                            </Content>
                            {/* /Content */}

                            {/* Footer */}
                            <Footer/>
                            {/* /Footer */}
                        </Layout>
                    </>
            }
        </Layout>
    )
}
