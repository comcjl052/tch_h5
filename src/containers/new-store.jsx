/*
 * @Author: 程巨龙
 * @Date: 2020-07-06 18:24:26
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-07 11:59:58
 * @Descripttion: 新店
 */

import React, { Component } from 'react';
import NewStoreComponent from '../components/new-store/new-store.jsx';

class NewStore extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <NewStoreComponent {...this.props} />
        )
    }
}

export default NewStore;