import React,{Component} from 'react';
import '../../css/Index.css';
import choise_icon from '../../image/icon/ic_comment_praise_unclick_black.png';
import goods_icon from '../../image/icon/abc_ic_star_black_36dp.png';

import HeaderSearch from '../base/HeaderSearch';  /*头部搜索*/
import Carousel from '../base/Carousel';      /*轮播*/
import SortList from '../home/SortList';   /*分类*/
import Activity from '../home/Activity';  /*活动(限购啥的)*/
import Choise_Activity from '../home/Choise_Activity';  /*emm 这个也是活动，就是精选活动啦*/
import Product from '../home/Product';   /*商品*/

import func from '../../lib/func';
import {config} from '../../lib/config';

class Index extends Component {
    constructor(){
        super();
        this.state = {
            SlideName : '',
            SlideFlag : false,
            CarouselData : [],
            SortData : [
                {
                    id : '1',
                    sort_name : '美妆',
                    file_path : '',
                },
                {
                    id : '2',
                    sort_name : '美妆',
                    file_path : '',
                },
                {
                    id : '3',
                    sort_name : '美妆',
                    file_path : '',
                },
                {
                    id : '4',
                    sort_name : '美妆',
                    file_path : '',
                },
                {
                    id : '5',
                    sort_name : '美妆',
                    file_path : '',
                },
                {
                    id : '6',
                    sort_name : '美妆',
                    file_path : '',
                },
                {
                    id : '7',
                    sort_name : '美妆',
                    file_path : '',
                },
                {
                    id : '8',
                    sort_name : '美妆',
                    file_path : '',
                },
                {
                    id : '9',
                    sort_name : '美妆',
                    file_path : '',
                },
                {
                    id : '10',
                    sort_name : '美妆',
                    file_path : '',
                },
            ],
            ProductData : [],
        };
    }
    render(){
        const {history} = this.props;
        return(
            <div className="home">
                <HeaderSearch/>
                <div style={{transform:this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)'}} className={this.state.SlideFlag ? "slide" : ""}>
                <Carousel Carousel = {this.state.CarouselData} />
                <SortList Sort = {this.state.SortData} />
                <Activity/>
                <p className="choise_activity_title"><img className="comment_icon" src={choise_icon} />精选活动</p>
                <Choise_Activity history = {history} />
                <p className="choise_activity_title"><img className="comment_icon" src={goods_icon} />为你推荐</p>
                <Product ProductData = {this.state.ProductData} history = {history} />
                </div>
            </div>
        )
    }
    componentWillMount(){
        const slideName = func.slide('1');
        this.setState({SlideName:slideName});
    }
    componentDidMount(){
        const that = this;
        /*setTimeout中的this，其作用域永远指向window。so在要外面单独给当前this开一个空间*/
        setTimeout(function(){
            that.setState({SlideFlag:true});
        },0)

        this.handleSearchBanner().then(()=>{
            this.handleSearchRecommendGoods('美妆');
        });


    }

    // 首页轮播图
    handleSearchBanner = () =>{
        return func.post(config.requestUrl.banner,{}).then(req=>{
            if(req.code === 1){
                req.data.forEach((item,index)=>{
                    item.visible = index === 0 ? true : false;
                })
                this.setState({CarouselData:req.data});
            }
        }).catch((err)=>{
            console.error(err);
        });
    }

    //首页推荐商品
    handleSearchRecommendGoods = (need_typeName) =>{
        return func.post(config.requestUrl.searchRecommendGoods,{type_name : need_typeName}).then(req =>{
            if(req.code === 1){
                this.setState({ProductData:req.data});
            }
        }).catch((error) =>{
            console.error(error);
        })
    }
}

export default Index