import React, {Component} from 'react';
import UnChoise from '../../image/icon/check_unselected_black.png';
import Choise from '../../image/icon/check_selected_black_exp.png';
import DeleteIcon from '../../image/icon/delete_icon.png';
import {config} from "../../lib/config";
import {connect} from 'react-redux';
import {changeChoise, changeCartCount ,deleteCartData} from "../../store/action";
import Modal from '../base/Modal';
import func from '../../lib/func';

/**
 * 此处有一坑，transform下的position:fixed 无法固定。有空回来想解决办法
 * */
const ModalContent = {
    modalContent: '很抢手哦~下次不一定能买到的QAQ 确定要删除我吗~',
    leftBtn: {
        text: '留在购物车'
    },
    rightBtn: {
        text: '狠心删除'
    }
};

class CartList extends Component {
    constructor(){
        super();
        this.state = {
            visible : false,
            deleteIndex : '',
        }
    }
    render() {
        const {cartData, dispatch, EditFlag} = this.props;
        return (
            <ul className="cart_ul">
                {
                    this.state.visible ? <Modal
                        {...ModalContent}
                        onLeftClick={() => this.handleControlModal('')}
                        onRightClick = {()=>this.handleDelete()}
                    /> : ''
                }
                {
                    cartData.map((CartItem, CartIndex) => {
                        return (
                            <li key={CartIndex} className="cart_li">
                                <span onClick={cartData => dispatch(changeChoise(CartIndex))}
                                      className="choise_box"><img src={CartItem.choise ? Choise : UnChoise}/></span>
                                <div className="cart_right_content">
                                    <span onClick={()=>this.handleToGoodsContent(CartItem.goods_id,CartItem)} className="right_content_img"><img src={config.imgUrl + CartItem.file_path}/></span>
                                    <div className="right_content_title">
                                        {
                                            EditFlag ?
                                                <div className="change_price_block">
                                                    <a onClick={cartData => dispatch(changeCartCount(CartIndex, 'des'))}>-</a>
                                                    <span>{CartItem.goods_count}</span>
                                                    <a onClick={cartData => dispatch(changeCartCount(CartIndex, 'inc'))}>+</a>
                                                </div>
                                                :
                                                <div>
                                                    <p onClick={()=>this.handleToGoodsContent(CartItem.goods_id,CartItem)} className="content_title">
                                                        <span
                                                            className="right_content_icon">{CartItem.discount_explain}</span>{CartItem.goods_name}
                                                    </p>
                                                    <p className="content_sku">350ml</p>
                                                </div>
                                        }

                                    </div>
                                    <p className="content_price">
                                        ¥{CartItem.after_price}
                                        <br/>
                                        {EditFlag ? <a onClick={()=>this.handleControlModal(CartIndex)} className="delete_icon"><img src={DeleteIcon}/></a> :
                                            <span>x{CartItem.goods_count}</span>}
                                    </p>
                                </div>

                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    handleControlModal = (index) =>{
        this.setState({deleteIndex:index} , ()=>{
            this.setState({visible:!this.state.visible});
        })
    };
    handleDelete = () =>{
        this.props.dispatch(deleteCartData(this.state.deleteIndex));
        this.handleControlModal('');
    };
    handleToGoodsContent = (goods_id,ProductItem) =>{
        func.setData('goodsData',ProductItem);
        this.props.history.push(config.path + '/goods/' + goods_id);
    };
}

export default connect()(CartList)