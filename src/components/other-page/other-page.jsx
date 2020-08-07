import React, { Component } from 'react';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import ModuleItem from '../module-item/module-item.jsx';
import TabNav from '../tab-item/tab-item.jsx';
import BrandStreet from '../brand-street/brand-street.jsx';
import './other-page.less';

class OthePageComponent extends Component {
    render() {
        const { goodsList, tabList, plateGoods, top_box_height, getNavBarInfo } = this.props;
        return (
            <div className="othe-page">
                <BlankItem show={true} />
                <TopBar {...this.props} title="同城清仓" />
                <div className="otheContainer" style={{ backgroundImage: `url(${goodsList.banner})` }}>
                    <div className="othe_goods">
                        <ModuleItem item={goodsList} />
                        {goodsList.ishow_logo == 0 && <BrandStreet  {...this.props} moduleName='清仓品牌街' list={data1} />}
                    </div>
                </div>
                <TabNav tab_nav={tabList} handleClick={getNavBarInfo} isTop={true} tab_list={plateGoods} h={top_box_height} />
            </div>
        )
    }
}

export default OthePageComponent;