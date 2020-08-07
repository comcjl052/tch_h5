/*
 * @Author: 程巨龙
 * @Date: 2020-07-07 15:07:05
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-07 16:41:03
 * @Descripttion: alert弹窗
 */

import React, { Component } from 'react';
import Dialog from './dialog.jsx';

export default class AlertDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            msg: '',
            callback: null
        }
    }
    closeDialog = () => {
        const cd = this.state.callback;
        this.setState({
            open: false,
            msg: '',
            callback: null
        });
        if (cd) {
            cd();
        }
    }
    alertDialog = (msg, callback) => {
        this.setState({
            open: true,
            msg,
            callback
        });
    }
    componentDidMount() {
        if (!window.originAlert) {
            window.originAlert = window.alert;
        }
        window.alert = this.alertDialog;
    }
    render() {
        const { open, msg } = this.state;
        return (
            <Dialog open={open}>
                <div className="AlertDialog">
                    <div className="txt" dangerouslySetInnerHTML={{ __html: msg }}></div>
                    <div className="confirmBox">
                        <div
                            className="base-btn dialog-btn"
                            onClick={() => this.closeDialog()}
                        >确定</div>
                    </div>
                </div>
            </Dialog>
        )
    }
}
