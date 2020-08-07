/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 18:19:55
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-24 18:49:15
 * @Descripttion: 搜索结果
 */
import React, { Component } from 'react';
import BlankItem from '../blank-item/blank-item.jsx';
import './search.less';
import { Base } from '../../lib/base.js';
export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            searchInput: '',
        }
        // this.myRef = React.createRef();
    }
    searchInputChange = val => {
        this.setState({
            searchInput: val.target.value,
        });
    }
    searchBtn = (keyworld) => {
        const { onSearch } = this.props;
        const { searchInput } = this.state;
        if (keyworld == undefined) {
            onSearch && onSearch(keyworld, 1);
            this.setState({
                step: 2,
            });
        } else {
            if (searchInput !== '') {
                onSearch && onSearch(searchInput, 1);
                this.setState({
                    step: 2,
                });
            }
        }
    }
    clearSearch = () => {
        this.setState({
            searchInput: '',
            step: 1,
        });
        this.refs.myRef.value = '';
        this.refs.myRef.focus();
    }
    render() {
        const { keywords, goodsList, total, delStorage, hotKey } = this.props;
        const { step, searchInput } = this.state;
        return (
            <div className="search-container">
                <div className="search_box">
                    <div className="search_input">
                        <span className="tongchenghui tch_search searchIco"></span>
                        <input ref="myRef" type="text" className="s_input" onChange={this.searchInputChange} placeholder='姆明夜灯' />
                        {searchInput.length > 0 && <span className="tongchenghui tch_close closeIco" onClick={this.clearSearch}></span>}
                    </div>
                    <div className="search_btn" onClick={this.searchBtn}>搜索</div>
                </div>
                {/* <div className="screen_box" style={{ top: '1.18rem' }}>
                    <div className="screen_item">
                        综合 <span className="tongchenghui tch_screen screen_img"></span>
                    </div>
                    <div className="screen_item">
                        销量 <span className="tongchenghui tch_screen screen_img"></span>
                    </div>
                    <div className="screen_item">
                        券后价 <span className="tongchenghui tch_screen screen_img"></span>
                    </div>
                    <div className="screen_item">
                        仅有券 <span className="tongchenghui tch_ok screen_img"></span>
                    </div>
                </div> */}
                <BlankItem />
                {step == 1 ? <div className="search-hot-content" style={{ top: '1.18rem' }}>
                    <div className="hot_tit">历史搜索：<span className="tongchenghui tch_del delIco" onClick={delStorage}></span></div>
                    <div className="history_content">
                        {keywords && keywords.map((item, key) => <div key={key} className="history_content_item" onClick={() => this.searchBtn(item)} >{item}</div>)}
                    </div>
                    <div className="hot_tit">热门搜索：</div>
                    <div className="hot_content">
                        <ul className="hot_content_list">
                            {hotKey && hotKey.map((item, index) => <li key={index} className="hot_content_list_item" onClick={() => Base.push({ 'type': 'goodDetail', 'value': { num_iid: '614860651327', item_url: 'https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-22596025193.12.248a57f1TQJCcN&id=614860651327' } })}>{index + 1}.{item.search_name}</li>)}
                        </ul>
                    </div>
                </div> : null}
                {step == 2 ? <div className="search-content">
                    <div className="s_box">
                        {goodsList && goodsList.map((item, index) => <div className="s_item" key={index} onClick={() => Base.push({ 'type': 'goodDetail', 'value': item })}>
                            <div className="s_img_box">
                                <img className="s_img" src={item.pict_url} alt="" />
                                {item.salc && <div className="tag">{item.salc}</div>}
                            </div>
                            <div className="s_info_box">
                                <div className="s_info_box_tit ellipsis-2">
                                    {item.name}
                                </div>
                                <div className="s_info_box_coupon">
                                    {item.coupon_amoun && <div className="c_items">￥{item.coupon_amoun} 券</div>}
                                    {item.fanxian && <div className="g_cashback">
                                        <img src={require('../../assets/images/h5/fanxian.png')} className='cb_img' alt="" />
                                        <div className="g_cashback_num">返现￥{item.fanxian}</div>
                                    </div>}
                                </div>
                                <div className="s_info_box_price">
                                    <div className="s_l">
                                        <span>￥{item.zk_final_price} </span>
                                        {/* <s>￥{item.reserve_price}</s> */}
                                    </div>
                                    <div className="s_r">已售{item.volume}件</div>
                                </div>
                            </div>
                        </div>)}
                        {total == 0 && <div className="ref_data">
                            <p>没有更多商品了~</p>
                        </div>}
                    </div>
                    {total == -1 ? <div className="no_data">
                        <img src={require('../../assets/images/h5/null-data.png')} className="no_data_img" alt="" />
                        <p>没有找到相关商品</p>
                    </div> : null}
                </div> : null}
            </div>
        )
    }
}