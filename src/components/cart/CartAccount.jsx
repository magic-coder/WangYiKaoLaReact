import React,{Component} from 'react';
import UnChoise from '../../image/icon/check_unselected_black.png';
import Choise from '../../image/icon/check_selected_black_exp.png';

import {connect} from 'react-redux';
import {toggleCar} from "../../store/action";

class CartAccount extends Component{
    render(){
        const {cartData,dispatch} = this.props;
        let choiseIndex = 0,allPrice = 0;
        cartData.forEach((item)=>{
            if(item.choise){
                choiseIndex++;
                allPrice += (parseInt(item.after_price)*item.goods_count);
            }
        });
        return(
            <div className="cart_account_block">
                <span onClick={cartData =>dispatch(toggleCar(choiseIndex))} className="choise_all"><img src={choiseIndex === cartData.length ? Choise : UnChoise} /></span>
                <span className="choise_all_text">全选</span>
                <span className="allcount">总计(不含税):<a>¥{allPrice}</a></span>
                <span className="to_pay">结算({choiseIndex})</span>
            </div>
        )
    }
}


export default connect()(CartAccount)