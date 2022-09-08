import React from "react";
import {Layout, Spin} from "antd";

export function PageWaiting() {
    return (
        <Layout>
            <Spin size={"large"}/>
        </Layout>
    )
}
