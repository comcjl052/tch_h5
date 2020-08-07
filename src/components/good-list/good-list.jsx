import React, { Component } from 'react';
import './good-list.less';

class GoodListComponent extends Component {
    jumpAlipay = (item) => {
        console.log(item, "jumpAlipay");
        if (Base.isAlipayClient) {
            // h5像小程序发数据
            my.postMessage({ 'fromTypes': 'itemClick', 'data': item });
            // 接收小程序的消息
            // my.onMessage = function (e) {
            //     alert(`to alipay ->`, JSON.stringify(e));
            // }
        }
    }

    render() {
        const { list } = this.props;
        let items = list.map(item => (
            <div className="item" key={item.item_id} onClick={() => this.jumpAlipay(item)}>
                {/* <div className="item" key={item.item_id} onClick={() => (
                window.location.href = 'https://ds.alipay.com/?scheme=alipays://platformapi/startapp?appId=2021001154656547&page=pages/index/index?_um_campaign=5ee066db978eea085d11e789&_um_channel=5ee066db978eea085d11e78a&relationId=2509752315'
            )
            }>*/}
                <div className="item-img">
                    <img src={item.pict_url} alt="" />
                </div>
                <div className="item-name ellipsis-2">{item.title}</div>
                <div className="item-price">{item.reserve_price}</div>
            </div >
        ))

        return (
            <div className='GoodListComponent'>
                {items}
            </div>
        )
    }
}

export default GoodListComponent