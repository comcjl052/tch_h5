/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 14:12:14
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-09 17:00:53
 * @Descripttion: 绑定支付宝
 */
import React, { Component } from 'react';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import './bind-alipay.less';

export default class BindAliPayComponent extends Component {
    componentDidMount() {

    }
    handleClick = () => {
        console.log(123)
    }
    render() {
        return (
            <div className="bind-alipay">
                <BlankItem blankHeight='0' />
                <TopBar {...this.props} title={"绑定支付宝"} />
                <div className="blank"></div>
                <div className="bind_content">
                    <div className="b_item">
                        <span>支付宝账号</span>
                        <input type="text" placeholder="输入支付宝账户" />
                    </div>
                    <div className="b_item">
                        <span>账号姓名</span>
                        <input type="text" placeholder="输入支付宝账户姓名" />
                    </div>
                    <div className="b_tips">
                        <p>账户返现金额将提现到此账户，请仔细填写。</p>
                        <p>每个月25号返现上个月已确认收货的订单返现。</p>
                    </div>
                </div>
                <div className="fixed_box">
                    <div className="fixed_btn" onClick={this.handleClick}>确定</div>
                </div>
            </div>
        )
    }
}