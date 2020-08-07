/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 16:03:50
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-08 16:04:53
 * @Descripttion: 邀请列表
 */
import React, { Component } from 'react';
import InviteListComponent from '../components/invite-list/invite-list.jsx';

class InviteList extends Component {
    render() {
        return (
            <InviteListComponent {...this.props} />
        )
    }
}

export default InviteList;