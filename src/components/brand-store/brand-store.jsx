/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 17:41:43
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-09 17:06:52
 * @Descripttion: 品牌商品列表
 */
import React, { Component } from 'react';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import TabNav from '../tab-item/tab-item.jsx';
import './brand-store.less';

export default class BrandStoreComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab_nav: ['低价好货', '水果生鲜', '衣服鞋帽', '早餐早点'],
        }
    }
    render() {
        const { tab_nav } = this.state;
        return (
            <div className="brand-store">
                <BlankItem blankHeight='0' />
                <TopBar {...this.props} title={"品牌商品列表"} />
                <div className="brand-content">
                    <div className="b_content">
                        <img src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" className="b_img" />
                        NIKE旗舰店
                    </div>
                    <div className="b_good_list">
                        <TabNav tab_nav={tab_nav} />
                    </div>
                </div>
            </div>
        )
    }
}