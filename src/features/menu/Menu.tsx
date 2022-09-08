import React from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import {MenuList} from "./Menu.List";
import {MenuAdd} from "./Menu.Add";

export function Menu() {
    return (
        <Layout>
            <h1>Menu Page</h1>
            <Routes>
                <Route path={""} element={<MenuList/>}/>
                <Route path={"/add"} element={<MenuAdd/>}/>
                <Route path={"/:menuId"} element={<MenuAdd/>}/>
            </Routes>
        </Layout>
    )
}
