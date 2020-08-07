import React, { Component } from 'react';
import TopBar from '../top-bar/top-bar.jsx';
import BlankItem from '../blank-item/blank-item.jsx';
import './new-store.less';

class NewStoreComponent extends Component {
    render() {
        return (
            <div className='new-store'>
                <BlankItem show={true} />
                <TopBar {...this.props} title={"新店特价"} />
                <div className="store_container">
                    <div className="store_item">
                        <div className="top_item">
                            <div className="left">
                                <img className='s_logo' src={require('../../assets/images/test/1.jpg')} alt="" />
                            </div>
                            <div className="middle">
                                <div className="t_title ellipsis">Moomin爆款姆明夜灯移动充电灯感应灯卧室灯遥控灯床头台灯硅胶灯</div>
                                <div className="m_price">￥98.00</div>
                            </div>
                            <div className="right">
                                <div className="entryStore">进店</div>
                            </div>
                        </div>
                        <div className="middle_item">
                            <div className="m_left">
                                <div className="m_item">满300减10</div>
                                <div className="m_item">满300减10</div>
                            </div>
                            <div className="m_right">领券</div>
                        </div>
                        <div className="foot_item">
                            <img className='m_img' src={require('../../assets/images/test/1.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="store_item">
                        <div className="top_item">
                            <div className="left">
                                <img className='s_logo' src={require('../../assets/images/test/1.jpg')} alt="" />
                            </div>
                            <div className="middle">
                                <div className="t_title ellipsis">Moomin爆款姆明夜灯移动充电灯感应灯卧室灯遥控灯床头台灯硅胶灯</div>
                                <div className="m_price">￥98.00</div>
                            </div>
                            <div className="right">
                                <div className="entryStore">进店</div>
                            </div>
                        </div>
                        <div className="middle_item">
                            <div className="m_left">
                                <div className="m_item">满300减10</div>
                                <div className="m_item">满300减10</div>
                            </div>
                            <div className="m_right">领券</div>
                        </div>
                        <div className="foot_item">
                            <img className='m_img' src={require('../../assets/images/test/1.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewStoreComponent;