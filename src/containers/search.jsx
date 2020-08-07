/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 18:22:47
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-24 18:44:57
 * @Descripttion: 搜索
 */
import React, { Component } from 'react';
import SearchComponent from '../components/search/search.jsx';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: [],
            goodsList: [],
            hotKeyList: [],
            total: 1,
            searchKey: '',
            current: 1
        }
    }
    onSearch = (keyworld, page, cb) => {
        // if (page == this.state.current) return;
        loading.show();
        if (page == 1) {
            this.setState({
                goodsList: [],
                current: page
            });
        }
        this.setState({
            searchKey: keyworld,
            current: page
        });
        Base.POST({
            act: "TkInterface",
            op: "DgMaterialOptional",
            adzone_id: '110390000270', // 必填
            q: keyworld,
            page: page
        }, res => {
            const { code, data } = res;
            if (code == 200) {
                // 搜索
                if (page == 1) {
                    this.setState({
                        goodsList: data.goodsList,
                        total: data.total
                    });
                } else {
                    if (data.goodsList.length > 0) {
                        data.goodsList.map(item => this.state.goodsList.push(item));
                        this.state.total = data.total;
                    } else {
                        // 没有数据了
                        this.state.total = -2;
                    }
                }
            } else if (code == -1) {
                // 搜索无结果
                if (page == 1) {
                    this.setState({
                        goodsList: [],
                        total: -1
                    });
                } else {
                    // 网络异常
                    console.log(`网络异常~`);
                }
            } else if (code == -2) {
                if (page > 1) {
                    this.setState({
                        total: -2
                    });
                }
            }
            cb && cb(res);
            loading.hide();
        });
        // 添加缓存
        let keylist = Base.getLocalData("keyword") ? JSON.parse(Base.getLocalData("keyword")) : [];
        if (keylist.indexOf(keyworld) === -1) {
            Base.setLocalData("keyword", JSON.stringify(keylist.concat(keyworld)));
            this.state.keywords = keylist.concat(keyworld);
        }
    }
    // 添加搜索记录
    setStorage() {
        let keylist = Base.getLocalData("keyword");
        this.setState({
            keywords: keylist ? JSON.parse(keylist) : []
        });
    }
    delStorage = () => {
        Base.removeLocalData('keyword');
        this.setState({
            keywords: []
        });
    }
    handleScroll = (e) => {
        const { isLoad, searchKey } = this.state;
        if (searchKey == '') return;

        // 文档内容实际高度（包括超出视窗的溢出部分）
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        // Base.log(`文档内容实际高度（包括超出视窗的溢出部分）-> ${scrollHeight}`);
        //滚动条滚动距离
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // Base.log(`滚动条滚动距离 -> ${scrollTop}`)
        //窗口可视范围高度
        let clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight, document.body.clientHeight);
        // Base.log(`窗口可视范围高度 -> ${clientHeight}`)
        // 滚动区域距离底部
        // Base.log(`窗口可视范围高度 + 滚动条滚动距离  -> ${clientHeight + scrollTop}`)
        if ((clientHeight + scrollTop) > (scrollHeight - 100)) {
            if (isLoad) return;
            this.setState({
                isLoad: true,
                current: ++this.state.current
            }, () => {
                this.onSearch(searchKey, this.state.current, res => {
                    this.setState({
                        isLoad: false
                    })
                });
            });
        }
    }
    onRequestHotKey = () => {
        Base.POST({
            act: "Goodsearch",
            op: "List",
        }, res => {
            console.log(`onRequestHotKey ->`, res);
            const { code, data } = res;
            if (code == 200) {
                this.setState({
                    hotKeyList: data.list
                });
            }
        })
    }
    componentDidMount() {
        this.onRequestHotKey();
        window.addEventListener('scroll', this.handleScroll);
        // this.onSearch('女装', 1);
        this.setStorage();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        const { keywords, goodsList, total, hotKeyList } = this.state;
        return (
            <SearchComponent
                {...this.props}
                onSearch={this.onSearch}
                delStorage={this.delStorage}
                keywords={keywords}
                hotKey={hotKeyList}
                goodsList={goodsList}
                total={total}
            />
        )
    }
}
export default Search;