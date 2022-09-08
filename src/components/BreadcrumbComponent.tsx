import React, {ReactNode, useEffect, useState} from "react";
import {Breadcrumb, Button} from "antd";
import {Link, Location} from "react-router-dom";

type BreadcrumbProps = {
    location: Location,
    menuMapPath: Map<string, string>
}

export function BreadcrumbComponent(props: BreadcrumbProps) {
    const location = props.location;
    const menuMapPath: Map<string, string> = props.menuMapPath;

    useEffect(() => {

    }, []);

    const renderListBreadcrumb = (pathname: string): ReactNode[] => {
        const list = pathname.split("/");
        list.shift();
        return list.map(e => (
            <Breadcrumb.Item key={e}>
                <Link to={`/${e}`}>
                    <Button type={"link"}>
                        {menuMapPath.get(`/${e}`)}
                    </Button>
                </Link>
            </Breadcrumb.Item>
        ))
    }

    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to={"/"}>
                    <Button type={"link"}>Home</Button>
                </Link>
            </Breadcrumb.Item>
            {renderListBreadcrumb(location.pathname)}
        </Breadcrumb>
    )
}
