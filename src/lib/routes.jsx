/*
 * @Author: 程巨龙
 * @Date: 2020-07-03 10:10:26
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-22 14:36:50
 * @Descripttion: 路由
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './createStore.js';
import { Base } from './base.js';
window.Base = Base;
window.Router = history;

import Gui from '../containers/gui.jsx';
import OthePage from '../containers/other-page.jsx';
import NewStore from '../containers/new-store.jsx';
import My from '../containers/my.jsx';
import ApplyExtend from '../containers/apply-extend.jsx';
import Income from '../containers/income.jsx';
import BindAliPay from '../containers/bind-alipay.jsx';
import CashOut from '../containers/cash-out.jsx';
import CashOutLog from '../containers/cash-out-log.jsx';
import Invite from '../containers/invite-list.jsx';
import BrandStore from '../containers/brand-store.jsx';
import Search from '../containers/search.jsx';
import GoodDetail from '../containers/good-detail.jsx';
// dialog
import Alert from '../components/dialog/alert.jsx';
import Confirm from '../components/dialog/confirm.jsx';
import Loading from '../components/dialog/loading.jsx';

// import GoodList from '../containers/good-list.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="route-wrap">
                {this.props.children}
            </div>
        )
    }
}

const AppWithRouter = withRouter(App);
export default (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppWithRouter>
                <Alert />
                <Confirm />
                <Loading />
                <Route exact path='/' component={Gui} />
                <Route path='/othepage' component={OthePage} />
                <Route path='/newstore' component={NewStore} />
                <Route path='/my' component={My} />
                <Route path='/apply' component={ApplyExtend} />
                <Route path='/income' component={Income} />
                <Route path='/bindalipay' component={BindAliPay} />
                <Route path='/cashout' component={CashOut} />
                <Route path='/cashoutlog' component={CashOutLog} />
                <Route path='/invite' component={Invite} />
                <Route path='/brandstore' component={BrandStore} />
                <Route path='/search' component={Search} />
                <Route path='/detail' component={GoodDetail} />
            </AppWithRouter>
        </ConnectedRouter>
    </Provider>
);