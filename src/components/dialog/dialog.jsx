/*
 * @Author: 程巨龙
 * @Date: 2020-07-07 14:58:32
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-07 16:39:14
 * @Descripttion: 全局弹窗
 */

import React, { Component } from 'react';
import './dialog.less';

export default class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        const { open, style } = this.props;
        return (
            <div className="DialogWrap" style={{ display: open ? '' : 'none' }}>
                <div className={open ? 'dialogBox dialog_appear' : 'dialogBox dialog_disappear'} style={style}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}