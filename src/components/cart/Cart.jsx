import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../css/cart.css';
import empty_cart from '../../image/icon/empty_cart_hint.png'
import HomeIcon from '../../image/icon/home_normal.png';
import CartAccount from './CartAccount';
import Header from '../base/HeaderSearch';
import CartLike from './CartLike';
import CartList from './CartList';

import func from '../../lib/func';
import {config} from "../../lib/config";

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            SlideName: '',
            SlideFlag: false,
            EditFlag: false,
            LikeData : [],
        };
    }

    render() {
        const {index , cartData} = this.props;
        return (
            <div style={{overflow: 'scroll',}} className="home">
                <Header index={index}/>
                <span onClick={()=>this.handleChangeEditState()} className="edit_cart_text">{this.state.EditFlag ? '完成' : '编辑'}</span>
                <div style={{transform: this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)'}}
                     className={this.state.SlideFlag ? "slide cart_content" : ""}>

                    {cartData.length === 0 ?
                        <div className="no_page">
                            <img src={empty_cart} />
                            <p>购物车没有商品哦</p>
                        </div> :
                        <div>
                            <p className="cart_shop_nane">
                                <span className="choise_all"><img src={HomeIcon}/></span>
                                <span>考拉自营</span>
                            </p>
                            <CartList cartData = {cartData} EditFlag = {this.state.EditFlag} />
                        </div>
                    }




                    <div className="guess_like">
                        <div className="like_block">
                            <span className="like_line">{}</span>
                            <p className="like_title">猜你喜欢</p>
                        </div>
                        <CartLike LikeData = {this.state.LikeData} />
                    </div>
                </div>
                <CartAccount cartData = {cartData}/>
            </div>
        )
    }

    componentWillMount() {
        const lastName = func.getData('slideName');
        const backArray = ['person'];
        const slideName = func.slide(lastName,backArray);
        this.setState({SlideName: slideName});
    }

    componentDidMount() {
        const that = this;
        setTimeout(function () {
            that.setState({SlideFlag: true});
        }, 0);
        func.setData('slideName','cart');
        this.handleSearchCartLike();
    }

    handleChangeEditState = () =>{
        this.setState({EditFlag:!this.state.EditFlag});
    }

    handleSearchCartLike = () =>{
        return func.post(config.requestUrl.searchCartLike,{}).then((req)=>{
            if(req.code === 1){
                this.setState({LikeData:req.data || []});
            }
        })
    }
}

const getList = state => {
    return {
        index: state.click,
        cartData: state.cart,
    }
}
export default connect(getList)(Cart)