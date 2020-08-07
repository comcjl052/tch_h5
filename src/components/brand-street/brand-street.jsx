import React, { Component } from 'react';
import './brand-street.less';

export default class BrandStreet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { list, moduleName, history } = this.props;
        return (
            <div className="brand_item">
                <div className="item_tit">
                    <span>{moduleName}</span>
                </div>
                <div className="item_goods">
                    {list && list.map(item => {
                        return <div className="g_items" key={item.id}>
                            <div className="g_img">
                                <img className="gImg" src={item.pic} alt="" />
                            </div>
                            <div className="g_title ellipsis">{item.name}</div>
                        </div>
                    })}
                </div>
            </div>

        )
    }
}