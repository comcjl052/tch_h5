import React, { Component } from 'react';
import './tab-item.less';

export default class TabNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab_index: 0,
            is_fixed: false,
            nav_h: '0.24rem',
            currPage: 2,
            pageSize: 4,
            type: 0, //  0商品池, 1物料池  
            plateId: 1,  // 标签id 
            isLoad: false,
            data_num: 1, // 返回的数量
        }
    }

    clickTab = (e, item) => {
        if (e == this.state.tab_index) return;
        this.setState({
            tab_index: e,
            is_fixed: false,
            currPage: 2,
            plateId: item.pcode,
            data_num: 1,
            type: item.type
        });
        const { handleClick } = this.props;
        const { pageSize, is_fixed } = this.state;
        if (is_fixed) {
            document.documentElement.scrollTop = this.props.h;
        }
        handleClick && handleClick(1, pageSize, item.type, item.pcode);
    }
    handleScroll = (e) => {
        const { h, handleClick } = this.props;
        const { currPage, pageSize, type, plateId, isLoad, data_num } = this.state;

        let nav_h = document.querySelector('.nav_container').clientHeight;
        // 文档内容实际高度（包括超出视窗的溢出部分）
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        // Base.log(`文档内容实际高度（包括超出视窗的溢出部分）-> ${scrollHeight}`);
        //滚动条滚动距离
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // Base.log(`滚动条滚动距离 -> ${scrollTop}`)
        //窗口可视范围高度
        let clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight, document.body.clientHeight);
        // Base.log(`窗口可视范围高度 -> ${clientHeight}`)

        if (e.srcElement.documentElement.scrollTop > (parseInt(h) + 50)) {
            this.setState({
                is_fixed: true,
                nav_h: nav_h + 10
            });
        } else {
            this.setState({
                is_fixed: false,
                nav_h: '0.24rem'
            });
        }
        // 滚动区域距离底部
        // Base.log(`窗口可视范围高度 + 滚动条滚动距离  -> ${clientHeight + scrollTop}`)
        if ((clientHeight + scrollTop) > (scrollHeight - 100)) {
            if (isLoad) return;
            if (data_num == 0) return;
            this.setState({ isLoad: true });

            handleClick && handleClick(currPage, pageSize, type, plateId, (res) => {
                Base.log(`handleScroll -> ${res}`);
                this.setState({
                    isLoad: false,
                    currPage: this.state.currPage + 1,
                    data_num: res
                });
            });
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { tab_nav, tab_list, isTop } = this.props;
        const { tab_index, is_fixed, nav_h, data_num } = this.state;
        return (
            <div className="tab_nav">
                <div className={!is_fixed ? "nav_container" : Base.isAlipayClient ? `nav_container fixed_nav ${isTop ? 'top' : null}` : `nav_container fixed_nav_h5 ${isTop ? 'top' : null}`}>
                    {
                        tab_nav && tab_nav.map((item, key) => {
                            return <div key={key} onClick={() => this.clickTab(key, item)} className={key == tab_index ? "n_items active" : "n_items"}>
                                {item.name}
                            </div>
                        })
                    }
                </div>
                <div className="tab_content" style={{ paddingTop: nav_h }}>
                    {tab_list && tab_list.map(item => <div className="tab_items" key={item.num_iid} onClick={() => Base.push({ 'type': 'goodDetail', 'value': item })}>
                        <div className="t_box">
                            <img className="t_img" src={item.pict_url} alt="" />
                        </div>
                        <div className="t_name ellipsis-2">{item.name}</div>
                        <div className="t_price">
                            ￥{item.zk_final_price}
                            <span className="t_o_price"><s>{item.reserve_price}</s></span>
                        </div>
                        <div className="t_coupon">
                            {item.coupon_amount && <span className="t_item">￥{item.coupon_amount}券</span>}
                            {item.fanxian && <span className="t_item t_cashback">返现￥{item.fanxian}</span>}
                        </div>
                    </div>)}
                    <div className="list_loadding">{data_num ? "加载中..." : "我是有底线的 ~"}</div>
                </div>
            </div>
        )
    }
}