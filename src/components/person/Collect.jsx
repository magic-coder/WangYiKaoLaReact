import React,{Component} from 'react';
import CollectHeader from '../base/OtherHeader';
import ungoods from '../../image/icon/empty_cart_hint.png';
import Modal from '../base/Modal';
import {connect} from 'react-redux';
import {addCart , clickBar} from "../../store/action";
import {config} from "../../lib/config";
import func from '../../lib/func';

const ModalContent = {
    modalContent: '加入购物车成功，去看看吗~',
    leftBtn: {
        text: '不去'
    },
    rightBtn: {
        text: '我要去'
    }
};


class Collect extends Component{
    constructor(){
        super();
        this.state = {
            SlideName : '',
            SlideFlag : false,
            visible: false,
        }
    }
    render(){
        const {collectGoods , dispatch} = this.props;
        return(
            <div className="collect_content">
                <span className="home">
                {
                    this.state.visible ? <Modal
                        {...ModalContent}
                        onLeftClick={() => this.handleControlModal('')}
                        onRightClick = {()=>this.handleTransfer('cart')}
                    /> : ''
                }
                </span>
                <CollectHeader title_name = '收藏' {...this.props} />
                <div style={{transform:this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)',paddingTop:'2.15rem'}} className={this.state.SlideFlag ? "slide" : ""}>
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
                                    <div onClick={()=>this.handleToGoodsContent(collectItem.goods_id,collectItem)} className="collect_img"><img src={config.imgUrl + collectItem.file_path} /></div>
                                    <div className="collect_right_content">
                                        <p onClick={()=>this.handleToGoodsContent(collectItem.goods_id,collectItem)} className="goods_title">{collectItem.goods_name}</p>
                                        <p className="goods_price"><span className="small">¥</span>{collectItem.after_price}</p>
                                        <a className="goods_discount">{collectItem.discount_explain}</a>
                                        <a onClick={()=>this.handleAddCart(collectItem)} className="add_car">加入购物车</a>
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
    handleToGoodsContent = (goods_id,ProductItem) =>{
        func.setData('goodsData',ProductItem);
        this.props.history.push(config.path + '/goods/' + goods_id);
    };
    handleTransfer = () =>{
        this.props.dispatch(clickBar('3'));
        this.props.history.push(config.path + '/cart');
    }
    handleControlModal = () =>{
        this.setState({visible:!this.state.visible});
    };
    handleAddCart = (collectItem) =>{
        this.props.dispatch(addCart(collectItem));
        this.handleControlModal();
    }

}

const getData = state =>{
    return {
        collectGoods : state.collectGoods
    }
}


export default connect(getData)(Collect)