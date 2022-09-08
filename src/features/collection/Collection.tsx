import React from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import {CollectionList} from "./Collection.List";

export function Collection() {
    return (
        <Layout>
            <h1>Collection Page</h1>
            <Routes>
                <Route path={""} element={<CollectionList/>}/>
            </Routes>
        </Layout>
    )
}
