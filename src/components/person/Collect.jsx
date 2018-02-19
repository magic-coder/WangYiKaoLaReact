import React,{Component} from 'react';
import '../../css/person.css';
import CollectHeader from '../base/OtherHeader';
import ungoods from '../../image/icon/empty_cart_hint.png';

import {connect} from 'react-redux';
import {addCart} from "../../store/action";
import {config} from "../../lib/config";
import func from '../../lib/func';


class Collect extends Component{
    constructor(){
        super();
        this.state = {
            SlideName : '',
            SlideFlag : false,
        }
    }
    render(){
        const {collectGoods , dispatch} = this.props;
        return(
            <div className="collect_content">
                <CollectHeader title_name = '收藏' {...this.props} />
                <div style={{transform:this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)'}} className={this.state.SlideFlag ? "slide" : ""}>
                {collectGoods.length === 0 ?
                    <div className="nopage">
                        <img src={ungoods} />
                        <p>还没有收藏任何商品哦！</p>
                    </div>
                    : ''}
                <ul className="collect_ul" >
                    {
                        collectGoods.map((collectItem,index)=>{
                            return(
                                <li key={index}>
                                    <div className="collect_img"><img src={config.imgUrl + collectItem.file_path} /></div>
                                    <div className="collect_right_content">
                                        <p className="goods_title">{collectItem.goods_name}</p>
                                        <p className="goods_price"><span className="small">¥</span>{collectItem.after_price}</p>
                                        <a className="goods_discount">{collectItem.discount_explain}</a>
                                        <a onClick={cartData => dispatch(addCart(collectItem))} className="add_car">加入购物车</a>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
        )
    }

    componentWillMount(){
        const lastName = func.getData('slideName');
        const backArray = [];
        const slideName = func.slide(lastName,backArray);
        this.setState({SlideName:slideName});
    }
    componentDidMount(){
        const that = this;
        setTimeout(function(){
            that.setState({SlideFlag:true});
        },0)
    }

}

const getData = state =>{
    return {
        collectGoods : state.collectGoods
    }
}


export default connect(getData)(Collect)