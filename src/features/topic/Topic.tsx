import React from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import {TopicList} from "./Topic.List";
import {TopicAdd} from "./Topic.Add";

export function Topic() {
    return (
        <Layout>
            <h1>Topics Page</h1>

            <Routes>
                <Route path={""} element={<TopicList/>}/>
                <Route path={"/add"} element={<TopicAdd/>}/>
            </Routes>
        </Layout>
    )
}
