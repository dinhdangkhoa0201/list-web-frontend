import React from 'react'
import * as icons from '@ant-design/icons'

const DynamicIcon = (props: {
    type: string
}) => {

    const {
        type
    } = props;
    const antIcon: {
        [key: string]: any
    } = icons;
    return React.createElement(antIcon[type]);
};
export default DynamicIcon
