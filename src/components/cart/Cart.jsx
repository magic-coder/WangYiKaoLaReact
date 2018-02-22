import React, {Component} from 'react';
import {connect} from 'react-redux';
import empty_cart from '../../image/icon/empty_cart_hint.png';
import HomeIcon from '../../image/icon/home_normal.png';
import CartAccount from './CartAccount';
import Header from '../base/HeaderSearch';
import CartLike from './CartLike';
import CartList from './CartList';
import Modal from '../base/Modal';

import func from '../../lib/func';
import {config} from "../../lib/config";
import {setLoadData , deleteCartDatas} from "../../store/action";

const ModalContent = {
    modalContent: '很抢手哦~下次不一定能买到的QAQ 确定要删除我们吗~',
    leftBtn: {
        text: '留在购物车'
    },
    rightBtn: {
        text: '狠心删除'
    }
};

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            SlideName: '',
            SlideFlag: false,
            EditFlag: false,
            LikeData : [],
            visible : false,
        };
    }

    render() {
        const {index , cartData} = this.props;
        return (
            <div style={{overflow: 'scroll',}} className="home">
                {
                    this.state.visible ? <Modal
                        {...ModalContent}
                        onLeftClick={() => this.handleControlModal('')}
                        onRightClick = {()=>this.handleDelete()}
                    /> : ''
                }
                <Header index={index}/>
                <span onClick={()=>this.handleChangeEditState()} className="edit_cart_text">{this.state.EditFlag ? '完成' : '编辑'}</span>
                <span onClick={()=>this.handleControlModal()} style={{display:this.state.EditFlag ? 'block' : 'none'}} className="delete_all">删除选中</span>
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
                            <CartList history={this.props.history} cartData = {cartData} EditFlag = {this.state.EditFlag} />
                        </div>
                    }




                    <div className="guess_like">
                        <div className="like_block">
                            <span className="like_line">{}</span>
                            <p className="like_title">猜你喜欢</p>
                        </div>
                        <CartLike history={this.props.history} LikeData = {this.state.LikeData} />
                    </div>
                </div>
                <CartAccount history={this.props.history} cartData = {cartData}/>
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
        if(!func.checkLoadDetail('cartLike',this.props.loadData)){
            this.handleSearchCartLike().then(()=>{
                const cartLikeData = {name:'cartLike',data:this.state.LikeData};
                this.props.dispatch(setLoadData(cartLikeData));
            });
        }else{
            const cartLikeIndex = func.getIndexByLoadData('cartLike',this.props.loadData);
            this.setState({LikeData : this.props.loadData[cartLikeIndex].data,})
        }

    }

    handleChangeEditState = () =>{
        this.setState({EditFlag:!this.state.EditFlag});
    };

    handleSearchCartLike = () =>{
        return func.post(config.requestUrl.searchCartLike,{}).then((req)=>{
            if(req.code === 1){
                this.setState({LikeData:req.data || []});
            }
        })
    };

    handleControlModal = () =>{
       this.setState({visible:!this.state.visible});
    };
    handleDelete = () =>{
        this.props.dispatch(deleteCartDatas());
        this.handleControlModal('');
    };
}

const getList = state => {
    return {
        index: state.click,
        cartData: state.cart,
        loadData : state.setload,
    }
}
export default connect(getList)(Cart)