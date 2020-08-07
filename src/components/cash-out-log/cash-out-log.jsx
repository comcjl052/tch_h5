/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 15:38:28
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-09 17:04:03
 * @Descripttion: 提现记录
 */
import React, { Component } from 'react';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import './cash-out-log.less';

export default class CashOutLog extends Component {
    render() {
        return (
            <div className="cash-out-log">
                <BlankItem blankHeight='0' />
                <TopBar {...this.props} title={"提现记录"} />
                <div className="log-content">
                    <div className="income_item b_b">
                        <div className="top">
                            <div className="left">
                                <div className="tit">累计提现金额</div>
                                <div className="price one">
                                    ￥<span>18,213</span>.48
                                    </div>
                            </div>
                            <div className="right">
                                <div className="tit">总提现次数</div>
                                <div className="price">
                                    <span>18,213</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="log_item b_b">
                        <div className="one">
                            <span className="log_price">2000元</span>
                            <span>2020-10-10 12:23:32</span>
                        </div>
                        <div className="two">成功提现到支付宝1858***554</div>
                    </div>
                    <div className="log_item b_b">
                        <div className="one">
                            <span className="log_price">2000元</span>
                            <span>2020-10-10 12:23:32</span>
                        </div>
                        <div className="two">成功提现到支付宝1858***554</div>
                    </div>
                    <div className="log_item b_b">
                        <div className="one">
                            <span className="log_price">2000元</span>
                            <span>2020-10-10 12:23:32</span>
                        </div>
                        <div className="two">成功提现到支付宝1858***554</div>
                    </div>
                    <div className="log_item no_data b_b">
                        暂无提现记录
                    </div>
                </div>
            </div>
        )
    }
}
