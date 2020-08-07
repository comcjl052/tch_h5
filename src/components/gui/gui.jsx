import React, { Component } from 'react';
// import Swiper from 'react-id-swiper';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import ModuleItem from '../module-item/module-item.jsx';
import CouponItem from '../coupon/coupon.jsx';
import TabNav from '../tab-item/tab-item.jsx';
import Slider from '../slider/slider.jsx';
import './gui.less';

const params = {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    // observer: true
    rebuildOnUpdate: true
}

class GuiComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topHeight: Base.phoneTopHeight,
            isIndex: true,
            list: [], // 模块
            bannerList: [], // banner
            goodsList: [], // 商品
            icon: '', // 优惠券图片
            tabList: [], // tab
            plateGoods: [], // tab goods
        }
    }
    componentDidMount() {
        this.setState({
            topHeight: document.querySelector('.search_bar').clientHeight
        });
    }

    render() {
        const { isIndex, topHeight } = this.state;
        const { bannerList, goodsList, icon, tabList, plateGoods, top_box_height, getNavBarInfo } = this.props;

        return (
            <div className='GuiComponent'>
                <TopBar {...this.props} isIndex={isIndex} title="同城优惠" />
                <BlankItem blankHeight={topHeight} />
                <div className="bg_box">
                    <div className="top_banner">
                        {bannerList && <Slider params={params} bannerList={bannerList} />}
                    </div>
                    {/* 同城清仓 */}
                    <ModuleItem item={goodsList} />
                    {/* 新店特价 */}
                    <CouponItem item={icon} />
                </div>
                <div className="park">
                    <TabNav tab_nav={tabList} handleClick={getNavBarInfo} tab_list={plateGoods} h={top_box_height} />
                </div>
            </div>
        )
    }
}
export default GuiComponent;