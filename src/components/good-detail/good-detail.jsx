/*
 * @Author: 程巨龙
 * @Date: 2020-07-17 14:11:25
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-27 11:24:49
 * @Descripttion: 商详
 */
import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './good-detail.less';

export default class GoodDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.params = {
            autoplay: {
                delay: 500,
                disableOnInteraction: false
            },
        }
    }
    render() {
        const { } = this.props;
        return (
            <div className="good-detail">
                <div className="good_img_box">
                    {/* <Swiper {...this.params} >
                        {bannerList && bannerList.map((item, index) =>
                            <div key={index} onClick={() => Base.push({ 'type': 'banner', 'value': item })}>
                                <img className="b_img" src={item.pic} alt="" />
                            </div>
                        )}
                    </Swiper> */}
                </div>
            </div>
        )
    }
}
