/*
 * @Author: 程巨龙
 * @Date: 2020-07-07 16:17:39
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-22 18:02:49
 * @Descripttion: 我的收益
 */
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import './income.less';

export default class IncomeComponent extends Component {
    getOption = () => {
        return {
            xAxis: {
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '26', '27', '28', '29', '30', '31']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        }

    }
    tapJump = path => {
        Base.push(path);
    }
    render() {
        return (
            <div className="income">
                <TopBar {...this.props} title={"B端收益"} />
                <BlankItem blankHeight='0' />
                <div className="income-content">
                    <ReactEcharts option={this.getOption()} />
                    {/* 收益 */}
                    <div className="income_box">
                        <div className="income_item">
                            <div className="top">
                                <div className="left">
                                    <div className="tit">本月25日可提现金额</div>
                                    <div className="price one">
                                        ￥<span>18,213</span>.48
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="tit">上月结余</div>
                                    <div className="price">
                                        ￥<span>18,213</span>.48
                                    </div>
                                </div>
                            </div>
                            <div className="foot">
                                <div className="icon_btn blueBtn" onClick={() => this.tapJump({ 'type': 'h5', 'value': '/bindalipay' })}>点击申请提现</div>
                            </div>
                        </div>
                    </div>
                    <div className="income_box">
                        <div className="income_item">
                            <div className="top">
                                <div className="left">
                                    <div className="tit">本月订单预估收益</div>
                                    <div className="price">
                                        ￥<span>18,213</span>.48
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="tit">较上月</div>
                                    <div className="price">
                                        ￥<span>18,213</span>.48
                                    </div>
                                </div>
                            </div>
                            <div className="foot">
                                <div className="icon_btn" onClick={() => this.tapJump({ 'type': 'h5', 'value': '/cashout' })}>分享同城优惠</div>
                            </div>
                        </div>
                    </div>
                    <div className="income_box">
                        <div className="income_item">
                            <div className="top">
                                <div className="left">
                                    <div className="tit">本月推荐好友补贴</div>
                                    <div className="price">
                                        ￥<span>18,213</span>.48
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="tit">较上月</div>
                                    <div className="price two">
                                        ￥<span>18,213</span>.48
                                    </div>
                                </div>
                            </div>
                            <div className="foot">
                                <div className="icon_btn">点击邀请好友</div>
                            </div>
                        </div>
                    </div>
                    {/* 图文 */}
                    <div className="msg_box">
                        <div className="msg_item">
                            <img className="m_img" src="http://tps.alibaba-inc.com/app/ph/750x350?preset=color" alt="" />
                            <div className="m_tit">
                                <p>如何躺着也能赚钱？！</p>
                                <p>点击查看赚钱攻略</p>
                            </div>
                        </div>
                        <div className="msg_item">
                            <img className="m_img" src="http://tps.alibaba-inc.com/app/ph/750x350?preset=color" alt="" />
                            <div className="m_tit">
                                <p>如何躺着也能赚钱？！</p>
                                <p>点击查看赚钱攻略</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

