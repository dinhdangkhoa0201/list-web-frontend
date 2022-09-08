import React from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import {SystemConstantList} from "./SystemConstant.List";

export function SystemConstant() {
    return (
        <Layout>
            <h1>System Constant Page</h1>
            <Routes>
                <Route path={""} element={<SystemConstantList/>}/>
            </Routes>
        </Layout>
    )
}
