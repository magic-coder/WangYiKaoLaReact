import React, { Component } from 'react';
import '../css/reset.css';
import '../lib/rem2px';   /*rem算法*/


/*路由文件*/
import Index from './home/Index';
import Category from './category/Category';
import Cart from './cart/Cart';
import GoodsContent from './product/GoodsContent';
import Person from './person/Person';
import Collect from './person/Collect';
import Search from './search/Search';
import NoPage from './base/NoPage';
/*路由文件*/
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import {config} from '../lib/config';
import {connect} from 'react-redux';
import {clickBar} from "../store/action";

/*底部栏*/
import Footer from './base/Footer';

const getList = state => {
    return {
        index : state.click,
    }
}
class RouterIndex extends Component {
    constructor(){
        super();
        this.state = {
        };
    }
    render() {
        const {dispatch,index} = this.props;
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path={config.path + "/category"} component={Category} />
                        <Route path={config.path + "/cart"} component={Cart} />
                        <Route path={config.path + "/goods/:GoodsId"} component={GoodsContent} />
                        <Route path={config.path + '/my'} component={Person} />
                        <Route path={config.path + '/collect'} component={Collect} />
                        <Route path={config.path + '/search'} component={Search} />
                        <Route path={config.path + '/nopage'} component={NoPage} />
                        <Route component={Index} />
                    </Switch>


                    <Footer index = {index} clickBar={index => dispatch(clickBar(index)) } />
                </div>
            </Router>

        );
    }
    componentDidMount(){

    }
}


export default connect(getList)(RouterIndex)
