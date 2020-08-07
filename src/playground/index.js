/*
 * @Author: 程巨龙
 * @Date: 2020-07-03 10:10:26
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-15 16:31:46
 * @Descripttion: 
 */
import 'normalize.css';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../lib/routes.jsx';
import '../assets/font/iconfont.css';
import './index.less';

ReactDOM.render(<div className="dom-wrap"> {Routes}</div>, document.querySelector('#app'));