/*
 * @Author: 程巨龙
 * @Date: 2020-07-07 15:07:59
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-07 16:40:16
 * @Descripttion: 确定取消弹窗
 */

import React, { Component } from 'react';
import Dialog from './dialog.jsx';

export default class ConfirmDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            msg: '',
            callback: null
        }
    }
    closeDialog = (result) => {
        const { callback } = this.state;
        this.setState({
            open: false,
            msg: '',
            callback: null
        });
        callback && callback(result);
    }
    alertDialog = (msg, callback) => {
        this.setState({
            open: true,
            msg,
            callback
        });
    }
    componentDidMount() {
        window.confirm = this.alertDialog;
    }
    render() {
        const { open, msg } = this.state;
        return (
            <Dialog open={open}>
                <div className="ConfirmDialog">
                    {msg.tit && <div className="tit">{msg.tit}</div>}
                    <div className="txt" dangerouslySetInnerHTML={{ __html: msg.txt }}></div>
                    <div className="confirmBox">
                        <div className="base-btn closeBtn" onClick={() => this.closeDialog(false)}>{msg.closeBtn}</div>
                        <div className="base-btn closeBtn" onClick={() => this.closeDialog(true)}>{msg.okBtn}</div>
                    </div>
                </div>
            </Dialog>
        )
    }
}
