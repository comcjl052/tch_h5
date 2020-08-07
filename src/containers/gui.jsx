/*
 * @Author: 程巨龙
 * @Date: 2020-07-06 11:33:40
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-23 18:10:11
 * @Descripttion: 首页
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDevice } from '../actions';
import GuiComponent from '../components/gui/gui.jsx';

class Gui extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            bannerList: [], // banner
            goodsList: [], // 商品
            icon: '', // 优惠券图片
            tabList: [], // tab
            plateGoods: [], // tab goods
            top_box_height: 800,
            plateId: 1
        }
    }
    onRequest() {
        Base.POST(
            {
                act: "MouldPlan",
                op: "GetAllPlan",
                rela_channel: 0,
                rela_city: 0,
                pageSize: 4
            },
            res => {
                const { code, data } = res;
                if (code == 200) {
                    this.setState({
                        list: data.mould_plan.mould_list,
                    }, () => {
                        setTimeout(() => {
                            // 计算区域高度
                            this.setState({
                                top_box_height: document.querySelector('.bg_box').clientHeight
                            });
                        }, 2000);
                    });
                    loading.hide();
                    data.mould_plan.mould_list.map(item => {
                        switch (item.tag) {
                            case '1':
                                this.setState({
                                    bannerList: item.bannerList,
                                });
                                break;
                            case "2":
                                this.setState({
                                    goodsList: item,
                                });
                                break;
                            case '3':
                                this.setState({
                                    icon: item,
                                });
                                break;
                            case '4':
                                this.setState({
                                    tabList: item.tabList,
                                    plateGoods: item.plateGoods.goodsList,
                                    total: item.plateGoods.total,
                                    plateId: item.tabList[0].id
                                });
                                break;
                            default:
                                break;
                        }
                    });

                } else {
                    loading.hide();
                    alert('网络异常，请重试');
                }
            }
        )
    }
    // scroll
    getNavBarInfo = (page, pageSize, type, plateId, cb) => {
        // MouldSet / GoodByPlate  post  page  pageSize  type  0商品池, 1物料池  plate  标签id  分页获取商品列表，根据类型
        let isCurrTab = (plateId != this.state.plateId);
        if (isCurrTab) {
            this.setState({
                plateGoods: [],
                plateId: plateId
            });
        }
        Base.POST({
            act: "MouldSet",
            op: "GoodByPlate",
            page: page,
            pageSize: pageSize,
            type: type,
            plate: plateId
        }, res => {
            if (res.code == 200 && res.data.hasOwnProperty('goodsList')) {
                if (isCurrTab) {
                    this.setState({
                        plateGoods: res.data.goodsList
                    });
                } else {
                    res.data.goodsList.map(item => this.state.plateGoods.push(item));
                }
                cb && cb(res.data.total);
            }
        })
    }
    componentDidMount() {
        loading.show();
        this.onRequest();

        if (Base.isAlipayClient) {
            // h5像小程序发数据
            // my.postMessage({ 'fromTypes': 'itemClick', 'data': item });
            my.postMessage({ 'fromTypes': 'ready' }); // 告诉小程序，我准备好了
            // 接收小程序的消息
            my.onMessage = (e) => {
                // my.postMessage(e);
                const { data } = e.res;
                Base.getAppLetsData = JSON.parse(data).device;
                console.log(`Base.getAppLetsData ->`, Base.getAppLetsData);
                this.props.onChangeDevice(Base.getAppLetsData); // 存入redux
                Base.phoneTopHeight = Base.getAppLetsData.titleBarHeight;
                console.log(`Base.phoneTopHeight ->`, Base.phoneTopHeight);
                // Base.phoneTopHeight = Base.getAppLetsData.statusBarHeight + Base.getAppLetsData.titleBarHeight;
            }
        }
    }
    render() {
        const { list, bannerList, goodsList, icon, tabList, plateGoods, top_box_height } = this.state;
        return (
            <GuiComponent
                {...this.props}
                list={list}
                bannerList={bannerList}
                goodsList={goodsList}
                icon={icon}
                tabList={tabList}
                plateGoods={plateGoods}
                top_box_height={top_box_height}
                getNavBarInfo={this.getNavBarInfo}
            />
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeDevice: obj => {
            dispatch(getDevice(obj))
        }
    }
}

const ConnectedGUI = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Gui);

export default ConnectedGUI;