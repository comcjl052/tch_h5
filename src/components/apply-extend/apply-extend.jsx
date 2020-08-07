/*
 * @Author: 程巨龙
 * @Date: 2020-07-07 11:14:32
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-22 17:59:10
 * @Descripttion: 申请推广
 */

import React, { Component } from 'react';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import './apply-extend.less';

class AppleExtendComponent extends Component {
    handleClick = () => {
        const { history } = this.props;
        let txt = `<div id="u1129_text" class="text ">
            <p><span>　一、合作事项</span></p><p><span>　　1、 乙方为甲方提供网上推广服务。</span></p><p><span>　　2、 乙方为甲方进行网络推广服务,可以在百度,google,360等搜索引擎搜索到乙方为甲方推广的相关信息。</span></p><p><span>　　推广方式主要为软文推广为主,借助搜索引擎、论坛、门户网站、视频网站、微博等平台进行综合的交互的推广信息。</span></p><p><span>　　乙方综合应用多种方式为甲方进行网络推广服务,推广信息可由甲方提供,若没有则由乙方自行拟定进行网上发送推广。</span></p><p><span>　　乙方通过自己独有的方式或方法对推广信息进行关键字修改及优化。</span></p><p><span>　　乙方每月提供一份网络推广效果数据分析报告给甲方。</span></p><p><span>　　通过乙方网上推广的信息前来咨询的客户,乙方将引导客户到甲方处交由甲方处理。</span></p>
          </div>`;
        confirm({ 'tit': '同城优惠推广合作协议', 'txt': txt, 'closeBtn': '拒绝', 'okBtn': '接受并继续' }, (res) => {
            let res_msg = res ? '您同意了协议' : '你拒绝了协议';
            if (res) {
                Base.push({ 'type': 'h5', 'value': '/income' });
            } else {
                alert(res_msg);
            }
        });
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="apply_extend">
                <BlankItem blankHeight='0' />
                <TopBar {...this.props} title={"申请推广"} />
                <div className="apply_content">
                    <img src="http://tps.alibaba-inc.com/app/ph/350x350?preset=color" alt="" className="a_img" />
                    <img src="http://tps.alibaba-inc.com/app/ph/350x350?preset=color" alt="" className="a_img" />
                    <img src="http://tps.alibaba-inc.com/app/ph/350x350?preset=color" alt="" className="a_img" />
                    <div className="check_box">
                        <input type="checkbox" name="yes" id="yes" /> <label htmlFor="yes">确认并同意<span>《同城优惠推广合作协议i》</span></label>
                    </div>
                </div>
                <div className="fixed_box">
                    <div className="fixed_btn" onClick={this.handleClick}>申请立即加入</div>
                </div>
            </div>
        )
    }
}

export default AppleExtendComponent;