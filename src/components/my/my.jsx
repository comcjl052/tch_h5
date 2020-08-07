import React, { Component } from 'react';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import './my.less';

class MyComponent extends Component {
    jump = path => {
        Base.push(path);
    }
    render() {
        return (
            <div className="MyComponent">
                <BlankItem blankHeight='0' />
                <TopBar {...this.props} title={"我的"} />
                <div className="top_bg">
                    <div className="user">
                        <div className="left">
                            <img className='u_img' src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                            用户昵称
                        </div>
                        <div className="right">
                            <div className="getRoot">点击授权登录</div>
                        </div>
                    </div>
                </div>
                <div className="my_container">
                    <div className="item_box">
                        <div className="join_sub">
                            <div className="join_title">转发返佣   购买返现   流量变现</div>
                            <div className="join_btn" onClick={() => this.jump({ 'type': 'h5', 'value': '/apply' })}>点击申请开通</div>
                        </div>
                    </div>
                    <div className="item_box">
                        <div className="box_container">
                            <div className="sub_item">
                                <div className="sub_price one">￥<span>18,888</span>.48</div>
                                <div className="sub_tips">本月预估总收益</div>
                            </div>
                            <div className="sub_item">
                                <div className="sub_price">￥<span>188</span>.48</div>
                                <div className="sub_tips">本月订单预估收益</div>
                            </div>
                        </div>
                        <div className="box_foot" onClick={() => this.jump({ 'type': 'h5', 'value': '/income' })}>
                            预计本月25日可提现1,888元 ，<span>查看详情</span>
                        </div>
                    </div>
                    <div className="item_box">
                        <div className="item_content">
                            <div className="b_item">
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">我的订单</div>
                            </div>
                            <div className="b_item">
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">添加到桌面</div>
                            </div>
                            <div className="b_item">
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">加入收藏</div>
                            </div>
                        </div>
                    </div>
                    <div className="item_box">
                        <div className="item_content">
                            <div className="b_item">
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">分享返佣</div>
                            </div>
                            <div className="b_item" onClick={() => this.jump({ 'type': 'h5', 'value': '/invite' })}>
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">邀请好友</div>
                            </div>
                            <div className="b_item" onClick={() => this.jump({ 'type': 'h5', 'value': '/cashout' })}>
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">佣金提现</div>
                            </div>
                            <div className="b_item">
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">推广物料</div>
                            </div>
                        </div>
                    </div>
                    <div className="item_box">
                        <div className="title">第三方服务</div>
                        <div className="item_content">
                            <div className="b_item">
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">分享返佣</div>
                            </div>
                            <div className="b_item">
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">邀请好友</div>
                            </div>
                            <div className="b_item">
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">佣金提现</div>
                            </div>
                            <div className="b_item">
                                <img className="b_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                                <div className="names">推广物料</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyComponent;