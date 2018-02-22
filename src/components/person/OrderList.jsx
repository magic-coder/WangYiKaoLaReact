import React,{Component} from 'react';
import Header from '../base/OtherHeader';
import deleteIcon from '../../image/icon/delete_icon.png';
import ungoods from '../../image/icon/empty_cart_hint.png';
import {connect} from 'react-redux';
import {config} from "../../lib/config";
import func from '../../lib/func';
import Modal from '../base/Modal';
import {deleOrder} from "../../store/action";

const ModalContent = {
    modalContent: '真的要删掉这个订单记录吗QAQ~',
    leftBtn: {
        text: '不删了'
    },
    rightBtn: {
        text: '删！！'
    }
};

class OrderList extends Component{
    constructor(){
        super();
        this.state = {
            SlideName : '',
            SlideFlag : false,
            type : '',
            visible: false,
            index : 0,
        }
    }
    render(){
        return(
            <div className="home order_content">
                {
                    this.state.visible ? <Modal
                        {...ModalContent}
                        onLeftClick={() => this.handleControlModal('')}
                        onRightClick = {()=>this.handleDeleOrder()}
                    /> : ''
                }
                <Header title_name = '我的订单' {...this.props}/>
                <ul className="order_headbar">
                    <li onClick={()=>this.handleClickHeader(1)} className={this.state.type === 1 ? "acti" : ""}>全部</li>
                    <li onClick={()=>this.handleClickHeader(2)} className={this.state.type === 2 ? "acti" : ""}>待付款</li>
                    <li onClick={()=>this.handleClickHeader(3)} className={this.state.type === 3 ? "acti" : ""}>待发货</li>
                    <li onClick={()=>this.handleClickHeader(4)} className={this.state.type === 4 ? "acti" : ""}>待收货</li>
                    <li onClick={()=>this.handleClickHeader(5)} className={this.state.type === 5 ? "acti" : ""}>评价</li>
                </ul>
                <div style={{transform:this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)'}} className={this.state.SlideFlag ? "slide" : ""}>
                {
                    this.props.orderData.length === 0 ?
                        <div className="unpage">
                            <img src={ungoods} />
                            <p>还没有任何订单哦！</p>
                        </div> :
                        <ul className="order_content_ul">
                            {
                                this.props.orderData.map((item,index)=>{
                                    let count = 0;
                                    let price = 0;
                                    return(
                                        <li key={index}>
                                            <div className="order_head">
                                                <a className="time_clock">{item.createTime}</a>
                                                <a onClick={()=>this.handleDeleComfirm(index)} className="order_status">交易成功&nbsp;|&nbsp;<img src={deleteIcon} /></a>
                                            </div>
                                            {
                                                item.orderData.map((goodsItem,goodsIndex)=>{
                                                    count += goodsItem.goods_count;
                                                    price += (goodsItem.goods_count * goodsItem.after_price);
                                                    return(
                                                        <div key={goodsIndex} className="goods_content">
                                                            <a className="left_goods_img"><img src={config.imgUrl + goodsItem.file_path} /></a>
                                                            <a className="goods_title">{goodsItem.goods_name}</a>
                                                            <a className="right_price">¥{goodsItem.after_price}<br/><span>x{goodsItem.goods_count}</span></a>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <p className="order_count">
                                                共{count}件&nbsp;&nbsp;&nbsp;应付总额: &nbsp; <span className="price">¥{price}</span>
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                }
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
        this.setState({type:func.getData('ordertype')});
        setTimeout(function(){
            that.setState({SlideFlag:true});
        },0);
    }

    handleClickHeader = (num) =>{
        this.setState({type:num})
    };

    handleControlModal = () =>{
        this.setState({visible:!this.state.visible});
    };

    handleDeleComfirm = (index) =>{
        this.setState({index},()=>{
            this.handleControlModal();
        })
    };
    handleDeleOrder = () =>{
        this.props.dispatch(deleOrder(this.state.index));
        this.handleControlModal();
    }
}

const getData = state =>{
    return {
        orderData : state.order
    }
}

export default connect(getData)(OrderList)