import React from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import {WebItemList} from "./WebItem.List";
import {WebItemAdd} from "./WebItem.Add";

export function WebItem() {
    return (
        <Layout>
            <Routes>
                <Route path={""} element={<WebItemList/>}/>
                <Route path={"/add"} element={<WebItemAdd/>}/>
            </Routes>
        </Layout>
    )
}
