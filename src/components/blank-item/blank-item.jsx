/*
 * @Author: 程巨龙
 * @Date: 2020-07-09 15:04:31
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-23 17:39:53
 * @Descripttion: 专用占位
 */
import React, { Component } from 'react';

export default class BlankItem extends Component {
    render() {
        const { show } = this.props;
        return (
            <div className={Base.isAlipayClient ? `blank-item ${show ? 'noIndex' : null}` : `blank-item-h5 ${show ? 'noIndex' : null}`}></div>
        )
    }
}