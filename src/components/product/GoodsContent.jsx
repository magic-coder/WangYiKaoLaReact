import React,{Component} from 'react';
import return_icon from '../../image/icon/title_back_icon.png';
import HomeActive from '../../image/icon/home_focus.png';
import rightIcon from '../../image/icon/arrowRight.png';
import unCollect from '../../image/icon/goods_uncollected.png';
import hasCollect from '../../image/icon/goods_collected.png';
import CartIcon from '../../image/icon/cart_normal.png';

import Carousel from '../base/Carousel';
import Modal from '../base/Modal';

import {config} from '../../lib/config';
import func from '../../lib/func';
import {connect} from 'react-redux';
import {addCart , addCollect ,clickBar} from "../../store/action";

const ModalContent = {
    modalContent: '成功添加到购物车，要现在去购物车看看吗~',
    leftBtn: {
        text: '留在这里'
    },
    rightBtn: {
        text: '前往购物车'
    }
};
class GoodsContent extends Component{
    constructor(){
        super();
        this.state = {
            SlideName : '',
            SlideFlag : false,
            CarouselData : [],
            goodsData : {},
            collectFlag : false,
            cartFlag : false,
        };
    }
    render(){
        const {goodsData , collectFlag} = this.state;
        const {dispatch , collectGoods} = this.props;
        /*这一步看是否收藏了这个商品，是的话让收藏图标变为已收藏，实际开发中不需要，由后端发是否收藏字段*/
        let flag = false;
        collectGoods.forEach((item)=>{
            flag = item.goods_id === goodsData.goods_id ? true : false;
        });
        return(
            <div className="content home">
                {
                    this.state.cartFlag ? <Modal
                        {...ModalContent}
                        onLeftClick={() => this.handleControlModal('')}
                        onRightClick = {()=>this.handleTransfer('cart')}
                    /> : ''
                }
                <header>
                    <ul className="content_navbar">
                        <li className="active">商品</li>
                        <li>评价</li>
                        <li>推荐</li>
                        <li>详情</li>
                    </ul>
                    <span onClick={()=>this.handleTransfer('return')} className="return"><img src={return_icon} /></span>
                    <span onClick={()=>this.handleTransfer('home')} className="return_home"><img src={HomeActive} /></span>
                </header>
                <div style={{transform:this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)'}} className={this.state.SlideFlag ? "slide goods_content" : "goods_content"}>
                    <Carousel Carousel = {this.state.CarouselData} />
                    <div className="price_block">
                        <a className="after_price">¥<span className="price_num">{goodsData.after_price}</span></a>
                        <a className="before_price">¥{goodsData.before_price}</a>
                        <span className="tag">{goodsData.discount_explain}</span>
                    </div>
                    <div className="goods_info">
                        <p className="goods_title">{goodsData.goods_name}</p>
                        <p className="goods_introduce">{goodsData.goods_detail}</p>
                    </div>
                    <div className="other_info">
                        <ul className="info_list">
                            <li className="info_item">
                                <div className="name">促&nbsp;销：</div>
                                <span className="discount_info">满99减50</span>
                                <img src={rightIcon} />
                            </li>
                            <li className="info_item">
                                <div className="name">配&nbsp;送：</div>
                                <span>至 佛山市禅城区</span>
                                <img src={rightIcon} />
                            </li>
                            <li className="info_item">
                                <div className="name">运&nbsp;费：</div>
                                <span>满88免运费</span>
                                <img src={rightIcon} />
                            </li>
                        </ul>
                    </div>
                    <div className="image_box">
                        <p className="image_title">图文详情</p>
                        <ul className="image_ul">
                            <li><img src="https://haitao.nos.netease.com/1bn2r5v5a30_710_562.jpg?imageView&thumbnail=750x0&quality=75&type=webp" /></li>
                        </ul>
                    </div>
                </div>
                <footer className="footer_zindex">
                    {
                        collectFlag ? <div className="add_success">
                            <div className="success_angel">{}</div>
                            添加成功
                        </div> : ''
                    }
                    <a onClick={()=>this.handleCollectGoods()} className="left_item">
                        <dl className="item_border_right">
                            <dt><img src={flag ? hasCollect : unCollect} /></dt>
                            <dd>{flag ? '已收藏' : '收藏'}</dd>
                        </dl>
                    </a>
                    <a onClick={()=>this.handleTransfer('cart')} className="left_item">
                        <dl>
                            <dt><img src={CartIcon} /></dt>
                            <dd>购物车</dd>
                        </dl>
                    </a>
                    <a onClick={()=>this.handleAddCart()} className="right_item addcart">
                        加入购物车
                    </a>
                    <a className="right_item">
                        立即购买
                    </a>
                </footer>
            </div>
        )
    }

    componentWillMount(){
        const lastName = func.getData('slideName');
        const backArray = ['index'];

        const slideName = func.slide(lastName,backArray);
        this.setState({SlideName:slideName});
    }

    componentDidMount(){
        window.scrollTo(0, 0);   //回到顶部
        const that = this;
        const goodsData = func.getData('goodsData');
        setTimeout(function(){
            that.setState({SlideFlag:true});
        },0)
        goodsData.fileList.forEach((item,index)=>{
            item.visible = index === 0 ? true : false;
        })
        this.setState({goodsData , CarouselData:goodsData.fileList});
    }

    handleCollectGoods = () =>{
        const that = this;
        this.props.dispatch(addCollect(func.getData('goodsData')));
        this.setState({collectFlag : true});
        setTimeout(function(){
            that.setState({collectFlag : false});
        },1500)
    };

    handleAddCart = () =>{
        this.props.dispatch(addCart(func.getData('goodsData')));
        this.setState({cartFlag : true});
    };

    handleTransfer = (type) =>{
        switch (type) {
            case 'return' :
                this.props.history.goBack();
                break;
            case 'cart' :
                this.props.dispatch(clickBar('3'));
                this.props.history.push(config.path + '/cart');
                break;
            default : this.props.history.push(config.path + '/');
        }
    }

    handleControlModal = () =>{
        this.setState({cartFlag:!this.state.cartFlag});
    }

}

const getCartList = state =>{
    return {
        collectGoods : state.collectGoods
    }
}

export default connect(getCartList)(GoodsContent)