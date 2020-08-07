/*
 * @Author: 程巨龙
 * @Date: 2020-07-07 14:59:52
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-07 16:41:11
 * @Descripttion: 菊花
 */

import React, { Component } from 'react';
import Dialog from './dialog.jsx';

const style = {
    loadingStyle: {
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        width: 'auto'
    }
}

export default class LoadingDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    show() {
        this.setState({
            open: true
        });
    }
    hide(callback) {
        this.setState({
            open: false
        });
        if (typeof success === 'function') {
            callback()
        }
    }
    componentDidMount() {
        window.loading = this;
    }
    render() {
        const { open } = this.state;
        return (
            <Dialog open={open} style={style.loadingStyle}>
                <ul className="loadingDialog">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Dialog>
        )
    }
}
