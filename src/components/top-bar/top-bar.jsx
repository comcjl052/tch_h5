import React, { Component } from 'react';
import './top-bar.less';

export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusBarHeight: 24,
            titleBarHeight: 48,
        }
    }
    componentDidMount() {
        if (Base.getAppLetsData == null) return;
        this.setState({
            statusBarHeight: Base.getAppLetsData.statusBarHeight,
            titleBarHeight: Base.getAppLetsData.titleBarHeight
        });
    }
    pushCityPage = () => {
        console.log(123);

        if (Base.isAlipayClient) {
            my.postMessage({ 'fromTypes': 'getCity' }); // 告诉小程序，要跳了
        }
    }
    render() {
        const { isIndex, title } = this.props;
        return (
            <div className={!isIndex ? "topBar isIndex" : "topBar"} >
                {
                    Base.isAlipayClient ? null : <div className="title_bar">
                        <span className="tongchenghui tch_left back" onClick={() => { Base.back() }}></span> {title}
                    </div>
                }
                <div className="search_bar">
                    <div className="addr_box" onClick={this.pushCityPage}>
                        <img src={require('../../assets/images/h5/location.png')} className="location_icon" alt="" />
                        <span className="ellipsis">杭州</span>
                        <img src={require('../../assets/images/h5/white_right.png')} className="location_down" alt="" />
                    </div>
                    <div className="search_input" onClick={() => Base.push({ 'type': 'h5', 'value': '/search' })}>
                        <span className="tongchenghui tch_search searchIco"></span>
                        搜商品名称 领优惠券拿返现
                    </div>
                </div>
            </div >
        )
    }
}