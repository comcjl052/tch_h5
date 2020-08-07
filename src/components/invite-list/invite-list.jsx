/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 16:05:03
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-09 17:09:25
 * @Descripttion: 邀请列表
 */
import React, { Component } from 'react';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import './invite-list.less';

export default class InviteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    handleClick = () => {
        this.setState({
            visible: !this.state.visible
        });
    }
    render() {
        const { visible } = this.state;
        return (
            <div className="invite-list">
                <TopBar {...this.props} title={"邀请好友"} />
                <BlankItem blankHeight='0' />
                <div className="invite-content">
                    <div className="invite_box">
                        <div className="i_tit">邀请补贴</div>
                        <div className="r_price">
                            <span><i>￥</i>8000<i>.48</i></span>
                        </div>
                    </div>
                    <div className="list_item b_b">
                        <img className="l_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                        <div className="f_box">
                            <div className="one">
                                <span>张三</span>
                                ￥8,292.00
                            </div>
                            <div className="two">推广补贴</div>
                        </div>
                    </div>
                    <div className="list_item b_b">
                        <img className="l_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                        <div className="f_box">
                            <div className="one">
                                <span>张三</span>
                                ￥8,292.00
                            </div>
                            <div className="two">推广补贴</div>
                        </div>
                    </div>
                    <div className="list_item b_b">
                        <img className="l_img" src="http://tps.alibaba-inc.com/app/ph/60x60?preset=color" alt="" />
                        <div className="f_box">
                            <div className="one">
                                <span>张三</span>
                                ￥8,292.00
                            </div>
                            <div className="two">推广补贴</div>
                        </div>
                    </div>
                </div>
                <div className="fixed_box">
                    <div className="fixed_btn" onClick={this.handleClick}>邀请好友加入</div>
                </div>
                {visible && <div className="invite_mask" onClick={this.handleClick} >
                    <div className="mask_content" onClick={e => e.stopPropagation()}>
                        <img className="m_img" src="http://tps.alibaba-inc.com/app/ph/750x350?preset=color" alt="" />
                        <div className="m_foot">
                            <div className="m_txt">
                                <p>同城优惠，天猫官方支付宝小程序，为用户提供精选优惠商品，提供诸多优惠。</p>
                                <p>支付宝扫码立即加入</p>
                            </div>
                            <img src="http://tps.alibaba-inc.com/app/ph/80x80?preset=color" alt="" className="code_img" />
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}