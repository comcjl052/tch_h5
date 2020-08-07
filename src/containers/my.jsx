/*
 * @Author: 程巨龙
 * @Date: 2020-07-06 20:24:39
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-07 11:59:46
 * @Descripttion: 我的
 */

import React, { Component } from 'react';
import MyComponent from '../components/my/my.jsx';

class My extends Component {
    render() {
        return (
            <MyComponent {...this.props} />
        )
    }
}

export default My;