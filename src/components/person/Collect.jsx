import React,{Component} from 'react';
import '../../css/person.css';
import CollectHeader from './CollectHeader';

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
                <ul style={{transform:this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)'}} className={this.state.SlideFlag ? "slide collect_ul" : "collect_ul"} >
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
        )
    }

    componentWillMount(){
        const slideName = func.slide('2');
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