import React, {CSSProperties} from 'react'
import * as icons from '@ant-design/icons'

const DynamicIcon = (props: {
    type: string,
    style?: CSSProperties
}) => {

    const {
        type,
        style
    } = props;
    const antIcon: {
        [key: string]: any
    } = icons;
    return React.createElement(antIcon[type], {
        style: style
    });
};
export default DynamicIcon
