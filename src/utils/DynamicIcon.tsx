import loadable from "@loadable/component";
import React from "react";


type DynamicIconProps = {
    type: string
}

// @ts-ignore
const DynamicIcon = loadable((props: DynamicIconProps) =>
    import(`@ant-design/icons/lib/icons/${props.type}.js`)
        .catch(err =>
            import(`@ant-design/icons/lib/icons/WarningOutlined.js`)));

export default DynamicIcon;
