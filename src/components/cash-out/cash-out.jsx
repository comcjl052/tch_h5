/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 14:21:15
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-22 17:59:33
 * @Descripttion: 提现
 */
import React, { Component } from 'react';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import './cash-out.less';


export default class CashOutComponent extends Component {
    render() {
        const { history } = this.props;
        return (
            <div className="cash-out">
                <BlankItem blankHeight='0' />
                <TopBar {...this.props} title={"申请提现"} />
                <div className="cash-content">
                    <div className="c_item num_box">
                        <span>提现到支付宝账户</span>
                        <span className="number">159****4248</span>
                    </div>
                    <div className="c_item mt_12">
                        <div className="c_tit">提现金额</div>
                        <div className="c_price">
                            ￥<input type="text" className="price" defaultValue="7000" />
                        </div>
                        <div className="c_foot">可提现金额 8000元，金额需为正整数</div>
                    </div>
                    <div className="c_tips">
                        <p>可提现金额为上月结算金额（订单确认收货的返现总额）</p>
                        <p className='log' onClick={() => Base.push({ 'type': 'h5', 'value': '/cashoutlog' })}>点击查看提现记录</p>
                    </div>
                </div>
                <div className="fixed_box">
                    <div className="fixed_btn" onClick={this.handleClick}>提现</div>
                </div>
            </div>
        )
    }
}