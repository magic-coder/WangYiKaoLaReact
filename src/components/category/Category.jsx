import React,{Component} from 'react';
import '../../css/category.css';
import HeaderSearch from '../base/HeaderSearch';
import sale_arrow from '../../image/icon/hot_sale_arrow.png';
import func from '../../lib/func';

class Category extends Component{
    constructor(){
        super();
        this.state = {
            SlideName : '',
            SlideFlag : false,
        };
    }
    render(){
        return(
            <div style={{overflow:'hidden'}} className="home">
                <HeaderSearch/>
                <div style={{transform:this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)'}} className={this.state.SlideFlag ? "slide" : ""}>
                    <div className="category_container">
                        <ul className="left_bar">
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area active">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                            <li className="bar_item">
                                <p className="menu_text">
                                    <a className="menu_area">休闲零食</a>
                                </p>
                            </li>
                        </ul>
                        <div className="right_content">
                            <p className="right_brand_top">
                                <span>畅销星品</span>
                                <a>热销榜&nbsp;<img src={sale_arrow} /></a>
                            </p>
                            <ul className="right_brand_ul">
                                <li>
                                    <dl>
                                        <dt><img src="https://haitao.nos.netease.com/iy59mwdq87_800_800.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></dt>
                                        <dd>上衣</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src="https://haitao.nos.netease.com/iy59mwdq87_800_800.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></dt>
                                        <dd>上衣</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src="https://haitao.nos.netease.com/iy59mwdq87_800_800.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></dt>
                                        <dd>上衣</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src="https://haitao.nos.netease.com/iy59mwdq87_800_800.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></dt>
                                        <dd>上衣</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src="https://haitao.nos.netease.com/iy59mwdq87_800_800.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></dt>
                                        <dd>上衣</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src="https://haitao.nos.netease.com/iy59mwdq87_800_800.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></dt>
                                        <dd>上衣</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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

export default Category