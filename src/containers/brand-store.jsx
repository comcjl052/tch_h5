/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 17:39:52
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-08 17:41:34
 * @Descripttion: 品牌商品列表
 */
import React, { Component } from 'react';
import BrandStoreComponent from '../components/brand-store/brand-store.jsx';

class BrandStore extends Component {
    render() {
        return (
            <BrandStoreComponent {...this.props} />
        )
    }
}

export default BrandStore;