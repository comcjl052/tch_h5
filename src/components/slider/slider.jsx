import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.less';

export default class Slider extends Component {
    render() {
        const { params, bannerList } = this.props;
        // shouldSwiperUpdate
        return (
            <Swiper {...params} >
                {bannerList.map((item, key) => {
                    return <div className="sliderItem" key={key}>
                        <img className="b_img" src={item.pic} alt="pic" />
                    </div>
                })}
            </Swiper>
        )
    }
}