import React, {useEffect, useState} from "react";
import {Badge, Breadcrumb, Button, Input, PageHeader} from "antd";
import {Link, Location} from "react-router-dom";
import {BellOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";
import * as uuid from "uuid";

type HeaderComponentProps = {
    location: Location,
    menuMapPath: Map<string, string>
}

type BreadcrumbProps = {
    path: string,
    breadcrumbName: string,
}

export function HeaderComponent(props: HeaderComponentProps) {
    const location = props.location;
    const menuMapPath: Map<string, string> = props.menuMapPath;

    const renderBreadcrumbItem = (pathname: string): React.ReactNode => {
        const list = pathname.split("/");
        return list.map(e => (
            <Breadcrumb.Item key={uuid.v4()}>
                <Link to={`/${e}`}>
                    {menuMapPath.has(`/${e}`) ? menuMapPath.get(`/${e}`) : menuMapPath.get(`${e}`)}
                </Link>
            </Breadcrumb.Item>
        ))

    }

    const renderBreadcrumb = () => (
        <Breadcrumb>
            {renderBreadcrumbItem(location.pathname)}
        </Breadcrumb>
    )

    return (
        <PageHeader
            className={"site-page-header"}
            breadcrumbRender={() => renderBreadcrumb()}
            title={menuMapPath.get(`/${location.pathname.split("/")[1]}`) + " Page"}
            extra={[
                <Input key={uuid.v4()} prefix={<SearchOutlined/>}
                       placeholder={"Type here..."}/>,
                <Button key={uuid.v4()} icon={<UserOutlined/>}>Sign In</Button>,
                <Badge key={uuid.v4()} count={5}>
                    <Button shape={"circle"} icon={<BellOutlined/>}/>
                </Badge>
            ]}
            style={{padding: 0}}
        />
    );
}
