import React from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import {IconList} from "./Icon.List";

export function Icon() {
    return (
        <Layout>
            <Routes>
                <Route path={""} element={<IconList/>}/>
            </Routes>
        </Layout>
    )
}
