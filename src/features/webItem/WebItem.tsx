import React from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import {WebItemList} from "./WebItem.List";
import {WebItemAdd} from "./WebItem.Add";

export function WebItem() {
    return (
        <Layout>
            <h1>Web Item Page</h1>
            <Routes>
                <Route path={""} element={<WebItemList/>}/>
                <Route path={"/add"} element={<WebItemAdd/>}/>
            </Routes>
        </Layout>
    )
}
