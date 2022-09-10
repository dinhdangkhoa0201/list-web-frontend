import React from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import {TopicList} from "./Topic.List";
import {TopicAdd} from "./Topic.Add";

export function Topic() {
    return (
        <Layout>
            <Routes>
                <Route path={""} element={<TopicList/>}/>
                <Route path={"/add"} element={<TopicAdd/>}/>
            </Routes>
        </Layout>
    )
}
