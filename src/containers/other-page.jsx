/*
 * @Author: 程巨龙
 * @Date: 2020-07-06 17:37:37
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-23 20:16:47
 * @Descripttion: 聚合页面
 */

import React, { Component } from 'react';
import OthePageComponent from '../components/other-page/other-page.jsx';

class OthePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsList: [],
            top_box_height: 800,
            plateId: 1,
            plateGoods: [],
            tabList: [],
        }
    }
    onRequire = () => {
        let mouldId = Base.getPageParams('mouldId');
        Base.POST({
            act: "Mould",
            op: "MouldContent",
            mould_id: mouldId,
            pageSize: 4,
        }, res => {
            const { code, data } = res;
            if (code == 200) {
                loading.hide();
                setTimeout(() => {
                    // 计算区域高度
                    this.setState({
                        top_box_height: document.querySelector('.otheContainer').clientHeight
                    });
                }, 2000);
                this.setState({
                    goodsList: data,
                    tabList: data.tabList,
                    plateGoods: data.plateGoods.goodsList
                });
            }
        })
    }
    // scroll
    getNavBarInfo = (page, pageSize, type, plateId, cb) => {
        // MouldSet / GoodByPlate  post  page  pageSize  type  0商品池, 1物料池  plate  标签id  分页获取商品列表，根据类型
        let isCurrTab = (plateId != this.state.plateId);
        if (isCurrTab) {
            this.setState({
                plateGoods: [],
                plateId: plateId
            });
        }
        Base.POST({
            act: "MouldSet",
            op: "GoodByPlate",
            page: page,
            pageSize: pageSize,
            type: type,
            plate: plateId
        }, res => {
            if (res.code == 200 && res.data.hasOwnProperty('goodsList')) {
                if (isCurrTab) {
                    this.setState({
                        plateGoods: res.data.goodsList
                    });
                } else {
                    res.data.goodsList.map(item => this.state.plateGoods.push(item));
                }
                cb && cb(res.data.total);
            }
        })
    }
    componentDidMount() {
        loading.show();
        this.onRequire();

        if (Base.isAlipayClient) {
            my.postMessage({ 'OthePage': Base.getPageParams('mouldId') });
        }
    }
    render() {
        const { goodsList, tabList, plateGoods, top_box_height } = this.state;
        return (
            <OthePageComponent
                {...this.props}
                goodsList={goodsList}
                tabList={tabList}
                plateGoods={plateGoods}
                top_box_height={top_box_height}
                getNavBarInfo={this.getNavBarInfo}
            />
        )
    }
}

export default OthePage;