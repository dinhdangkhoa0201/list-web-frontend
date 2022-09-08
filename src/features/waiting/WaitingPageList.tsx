import React, {useState} from "react";
import {Layout, Skeleton} from "antd";

export function WaitingPageList() {

    const [active, setActive] = useState<boolean>(true);

    return (
        <Layout>
            <Skeleton.Node active={active}/>
        </Layout>
    )
}
