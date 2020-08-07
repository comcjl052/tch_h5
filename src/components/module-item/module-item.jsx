import React, { Component } from 'react';
import './module-item.less';


export default class ModuleItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { id, name, goodsList } = this.props.item;
        return (
            <div className="module_item">
                <div className="item_tit">
                    <span>{name}</span>
                    <span className="more" onClick={() => Base.push({ 'type': 'h5', 'value': '/othepage' }, { mouldId: id })}>更多 <span className="tongchenghui tch_right"></span></span>
                </div>
                <div className="item_goods">
                    {goodsList && goodsList.goodsList.map(item => {
                        return <div className="g_items" key={item.num_iid} onClick={() => Base.push({ 'type': 'goodDetail', 'value': item })}>
                            <div className="g_img">
                                <img className="gImg" src={item.pict_url} alt="" />
                                {item.salc ? <div className="tag">{item.salc}</div> : null}
                            </div>
                            <div className="g_title ellipsis-2">{item.name}</div>
                            {item.coupon_amount && <div className="g_coupon">
                                <div className="c_items">￥{item.coupon_amount} 券</div>
                            </div>}
                            {item.fanxian && <div className="g_coupon">
                                <img src={require('../../assets/images/h5/fanxian.png')} className='cb_img' alt="" />
                                <div className="g_cashback">返现￥{item.fanxian}</div>
                            </div>}
                            <div className="g_price">￥{item.zk_final_price} <span className="old_price"><s>{item.reserve_price}</s></span></div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}