import React from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import {WebItemList} from "./WebItem.List";
import {WebItemAdd} from "./WebItem.Add";
import {WebItemImport} from "./WebItem.Import";

export function WebItem() {
    return (
        <Layout>
            <Routes>
                <Route path={""} element={<WebItemList/>}/>
                <Route path={"/add"} element={<WebItemAdd/>}/>
                <Route path={"/import"} element={<WebItemImport/>}/>
            </Routes>
        </Layout>
    )
}
