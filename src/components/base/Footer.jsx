import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
/*这是没被选中的图标*/
import HomeIcon from '../../image/icon/home_normal.png';
import CategoryIcon from '../../image/icon/category_normal.png';
import RecommendIcon from '../../image/icon/activity_normal.png';
import CartIcon from '../../image/icon/cart_normal.png';
import kaolaIcon from '../../image/icon/kaola_normal.png';
/*这些是选中的图标*/
import HomeActive from '../../image/icon/home_focus.png';
import CategoryActive from '../../image/icon/category_focus.png';
import RecommentActive from '../../image/icon/activity_focus.png';
import CartActive from '../../image/icon/cart_focus.png';
import kaolaActive from '../../image/icon/kaola_focus.png';

const HomeStyle = {backgroundImage:"url("+HomeIcon+")"};
const HomeFocus = {backgroundImage:"url("+HomeActive+")"};
const CategoryStyle = {backgroundImage:"url("+CategoryIcon+")"};
const CategoryFocus = {backgroundImage:"url("+CategoryActive+")"};
const RecommendStyle = {backgroundImage:"url("+RecommendIcon+")"};
const RecommentFocus = {backgroundImage:"url("+RecommentActive+")"};
const CartStyle = {backgroundImage:"url("+CartIcon+")"};
const CartFocus = {backgroundImage:"url("+CartActive+")"};
const KaolaStyle = {backgroundImage:"url("+kaolaIcon+")"};
const KaolaFocus = {backgroundImage:"url("+kaolaActive+")"};


/*这代码看不下去了！！！记得回来改！！！！！！！！！！！！！！！！！！！！！！！！！！！*/
export default class Footer extends Component{
    render(){
        const {index} = this.props;
        return(
            <footer className="flex flex-align-center">
                <div onClick={()=>this.props.clickBar('0')} className={index[0] && index[0].index === '0' ? "footer_item active": 'footer_item'}>
                    <Link to="/">
                        <i style={index[0] && index[0].index === '0' ? HomeFocus : HomeStyle} className="icon footerIcon">{}</i>
                        <p className="footer-title">首页</p>
                    </Link>
                </div>
                <div onClick={()=>this.props.clickBar('1')} className={index[0] && index[0].index === '1' ? "footer_item active": 'footer_item'}>
                    <Link to="/category">
                        <i style={index[0] && index[0].index === '1' ? CategoryFocus : CategoryStyle} className="icon footerIcon">{}</i>
                        <p className="footer-title">分类</p>
                    </Link>
                </div>
                <div onClick={()=>this.props.clickBar('2')}  className={index[0] && index[0].index === '2' ? "footer_item active": 'footer_item'}>
                    <Link to="/nopage">
                        <i style={index[0] && index[0].index === '2' ? RecommentFocus : RecommendStyle} className="icon footerIcon">{}</i>
                        <p className="footer-title">种草社区</p>
                    </Link>
                </div>
                <div onClick={()=>this.props.clickBar('3')}  className={index[0] && index[0].index === '3' ? "footer_item active": 'footer_item'}>
                    <Link to="/cart">
                        <i style={index[0] && index[0].index === '3' ? CartFocus : CartStyle} className="icon footerIcon">{}</i>
                        <p className="footer-title">购物车</p>
                    </Link>
                </div>
                <div onClick={()=>this.props.clickBar('4')}  className={index[0] && index[0].index === '4' ? "footer_item active": 'footer_item'}>
                    <Link to="/my">
                        <i style={index[0] && index[0].index === '4' ? KaolaFocus : KaolaStyle} className="icon footerIcon">{}</i>
                        <p className="footer-title">我的</p>
                    </Link>
                </div>
            </footer>
        )
    }
    componentDidMount(){
        /*看看是什么路由，然后让当前路由的对应图标高亮*/
        let clickIndex = '';
        switch (window.location.pathname){
            case '/' :
                clickIndex = '0';
                break;
            case '/category' :
                clickIndex = '1';
                break;
            case '/zcsq' :
                clickIndex = '2';
                break;
            case '/cart' :
                clickIndex = '3';
                break;
            default : clickIndex = '4';
        }
        this.props.clickBar(clickIndex);
    }

}

Footer.propTypes = {
    clickBar:PropTypes.func.isRequired,
}