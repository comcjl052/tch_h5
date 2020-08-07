/*
 * @Author: 程巨龙
 * @Date: 2020-07-17 14:08:11
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-27 09:59:38
 * @Descripttion: 商详
 */
import React, { Component } from 'react';
import GoodDetailComponent from '../components/good-detail/good-detail.jsx';

class GoodDetail extends Component {
    onRequest() {

        Base.GET(
            {
                act: "TkGoods",
                op: "GetGoodsInfo",
                id: '574140777819'
            },
            res => {
                console.log(`res ->`, res);
                const { data } = res;
                // if (data.result_list.hasOwnProperty('map_data')) {
                //     this.setState({
                //         list: data.result_list.map_data
                //     });
                // } else {
                //     alert('数据异常，请刷新重试！')
                // }
            }
        )
    }
    componentDidMount() {
        this.onRequest();
    }
    render() {
        return (
            <GoodDetailComponent {...this.props} />
        )
    }
}

export default GoodDetail;