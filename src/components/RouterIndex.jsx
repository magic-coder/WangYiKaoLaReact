import React, { Component } from 'react';
import '../css/reset.css';
import '../css/cart.css';
import '../css/category.css';
import '../css/person.css';
import '../css/Index.css';
import '../css/Search.css';
import '../css/Product.css';
import '../lib/rem2px';   /*rem算法*/

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

import asyncComponent from './base/AsyncComponent'
/*路由文件*/
import Index from './home/Index';
// const Index = asyncComponent(()=> import("./home/Index"));
const Category = asyncComponent(() => import("./category/Category.jsx"));
const Cart = asyncComponent(()=> import("./cart/Cart.jsx"));
const GoodsContent = asyncComponent(()=> import("./product/GoodsContent"));
const Person = asyncComponent(()=> import("./person/Person"));
const Collect = asyncComponent(()=> import("./person/Collect"));
const OrderList = asyncComponent(()=> import("./person/OrderList"));
const Search = asyncComponent(()=> import("./search/Search"));
const NoPage = asyncComponent(()=> import("./base/NoPage"));
/*路由文件*/


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
                        <Route path={config.path + '/orderlist'} component={OrderList} />
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
