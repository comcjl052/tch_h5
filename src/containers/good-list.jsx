import React, { Component } from 'react';
import GoodListComponent from '../components/good-list/good-list.jsx';

class GoodList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    onRequest() {
        Base.GET(
            {
                act: "goods",
                op: "list",
                testValue: 1
            },
            res => {
                const { data } = res;
                if (data.result_list.hasOwnProperty('map_data')) {
                    this.setState({
                        list: data.result_list.map_data
                    });
                } else {
                    alert('数据异常，请刷新重试！')
                }
            }
        )
    }
    componentDidMount() {
        if (Base.isAlipayClient) {
            // h5像小程序发数据
            my.postMessage({ 'addr': 'Here is h5 page' });
            // 接收小程序的消息
            my.onMessage = (e) => {
                console.log(`get msg ->`, e); //{'sendToWebView': '1'}
                // alert(JSON.stringify(e));
                this.setState({
                    list: e
                })
            }
        } else {
            // alert(`不在支付宝环境...`);
            this.onRequest();
        }
    }
    render() {
        const { list } = this.state;
        return (
            <GoodListComponent {...this.props} list={list} />
        )
    }
}

export default GoodList;