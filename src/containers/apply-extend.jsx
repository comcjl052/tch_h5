/*
 * @Author: 程巨龙
 * @Date: 2020-07-07 11:12:33
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-07 11:59:23
 * @Descripttion: 申请推广
 */

import React, { Component } from 'react';
import ApplyExtendComponent from '../components/apply-extend/apply-extend.jsx';

// 申请推广
class ApplyExtend extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <ApplyExtendComponent {...this.props} />
        )
    }
}

export default ApplyExtend;