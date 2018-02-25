import React,{Component} from 'react';
import UnChoise from '../../image/icon/check_unselected_black.png';
import Choise from '../../image/icon/check_selected_black_exp.png';
import moment from 'moment';
import {connect} from 'react-redux';
import {config} from "../../lib/config";
import func from '../../lib/func';
import Modal from '../base/Modal';
import {toggleCar , addOrder , deleteCartDatas , clickBar} from "../../store/action";

const ModalContent = {
    modalContent: '下单成功啦，要现在去订单看看吗~~~~',
    leftBtn: {
        text: '留在购物车'
    },
    rightBtn: {
        text: '嗯呐我要去'
    }
};

class CartAccount extends Component{
    constructor() {
        super();
        this.state = {
            visible : false,
        };
    }
    render(){
        const {cartData,dispatch} = this.props;
        let choiseIndex = 0,allPrice = 0;
        cartData.forEach((item)=>{
            if(item.choise){
                choiseIndex++;
                allPrice += (parseFloat(item.after_price*item.goods_count).toFixed(2));
            }
        });
        return(
            <div className="cart_account_block">
                {
                    this.state.visible ? <Modal
                        {...ModalContent}
                        onLeftClick={() => this.handleControlModal('')}
                        onRightClick = {()=>this.handleToOrderList()}
                    /> : ''
                }
                <span onClick={cartData =>dispatch(toggleCar(choiseIndex))} className="choise_all"><img src={choiseIndex === cartData.length ? Choise : UnChoise} /></span>
                <span className="choise_all_text">全选</span>
                <span className="allcount">总计(不含税):<a>¥{allPrice}</a></span>
                <span onClick={()=>this.handleAddOrder()} className="to_pay">结算({choiseIndex})</span>
            </div>
        )
    }
    handleAddOrder = () =>{
        let orderData = [];
        this.props.cartData.forEach((item)=>{
            if(item.choise){orderData.push(item)}
        });
        if(orderData.length>0){
            let addData = {};
            addData.createTime = moment().format('YYYY-MM-DD HH:mm:ss');
            addData.orderData = orderData;
            this.props.dispatch(addOrder(addData));
            this.props.dispatch(deleteCartDatas());
            this.handleControlModal();
        }
    };
    handleControlModal = () =>{
        this.setState({visible:!this.state.visible});
    };
    handleToOrderList = () =>{
        func.setData('ordertype',1);
        /**
         * push两次是因为goback函数会返回购物车而不是我想要的个人中心
         */
        this.props.dispatch(clickBar('4'));
        this.props.history.push(config.path + '/my');
        this.props.history.push(config.path + '/orderlist');
        this.handleControlModal('');
    };
}


export default connect()(CartAccount)