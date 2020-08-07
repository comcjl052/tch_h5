import React, { Component } from 'react';
import './coupon.less';


export default class CouponItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { id, name, icon } = this.props.item;
        let list = [];
        list = icon && icon.split(',');
        return (
            <div className="coupon_box">
                <div className="item_tit">
                    <span>{name}</span>
                    <span className="more" onClick={() => Base.push({ 'type': 'h5', 'value': '/newstore' }, { mouldId: id })}>更多 <span className="tongchenghui tch_right"></span></span>
                </div>
                <div className="item_goods">
                    <div className="store_coupon">
                        {
                            list && list.map((item, index) => {
                                return <div className="coupon_item" key={index}>
                                    <img className="c_img" src={item} alt="" />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}