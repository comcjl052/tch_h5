/*
 * @Author: 程巨龙
 * @Date: 2020-07-07 16:15:04
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-07 16:17:22
 * @Descripttion: 我的收益
 */

import React, { Component } from 'react';
import InComponent from '../components/income/income.jsx';

class Income extends Component {
    render() {
        return (
            <InComponent {...this.props} />
        )
    }
}

export default Income;