import React, {Component} from 'react';
import choise_icon from '../../image/icon/ic_comment_praise_unclick_black.png';
import goods_icon from '../../image/icon/abc_ic_star_black_36dp.png';

import HeaderSearch from '../base/HeaderSearch';
/*头部搜索*/
import Carousel from '../base/Carousel';
/*轮播*/
import SortList from '../home/SortList';
/*分类*/
import Activity from '../home/Activity';
/*活动(限购啥的)*/
import Choise_Activity from '../home/Choise_Activity';
/*emm 这个也是活动，就是精选活动啦*/
import Product from '../home/Product';
/*商品*/

import func from '../../lib/func';
import {config} from '../../lib/config';
import LazyLoad from 'react-lazyload';
import {connect} from 'react-redux';
import {setLoadData} from "../../store/action";

class Index extends Component {
    constructor() {
        super();
        this.state = {
            SlideName: '',
            SlideFlag: false,
            CarouselData: [],
            ProductData: [],
            activityData: [{activity_goods: []}],
        };
    }

    render() {
        const {history} = this.props;
        return (
            <div className="home">
                <HeaderSearch history={history}/>
                <div style={{transform: this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)'}}
                     className={this.state.SlideFlag ? "slide" : ""}>
                    <LazyLoad>
                        <Carousel Carousel={this.state.CarouselData}/>
                    </LazyLoad>
                    <LazyLoad>
                        <SortList history={history} Sort={this.state.SortData}/>
                    </LazyLoad>
                    <Activity/>
                    <p className="choise_activity_title"><img className="comment_icon" src={choise_icon}/>精选活动</p>
                    <Choise_Activity activityData={this.state.activityData} history={history}/>
                    <p className="choise_activity_title"><img className="comment_icon" src={goods_icon}/>为你推荐</p>
                    <Product ProductData={this.state.ProductData} history={history}/>
                </div>

            </div>
        )
    }

    componentWillMount() {
        /*不管哪个页面回来，index都是slide-back*/
        const backArray = ['index'];
        const slideName = func.slide('index', backArray);
        this.setState({SlideName: slideName});
    }

    componentDidMount() {
        const that = this;
        /*setTimeout中的this，其作用域永远指向window。so在要外面单独给当前this开一个空间*/
        setTimeout(function () {
            that.setState({SlideFlag: true});
        }, 0);
        func.setData('slideName', 'index');

        if (!func.checkLoadDetail('banner', this.props.loadData) && !func.checkLoadDetail('recommend', this.props.loadData)) {
            this.handleSearchBanner().then(() => {
                this.handleSearchRecommendGoods('美妆').then(() => {
                    this.handleSearchActivity().then(() => {
                        const BannerData = {name: 'banner', data: this.state.CarouselData};
                        const RecommendData = {name: 'recommend', data: this.state.ProductData};
                        const ActivityData = {name: 'activity', data: this.state.activityData};
                        this.props.dispatch(setLoadData(BannerData));
                        this.props.dispatch(setLoadData(RecommendData));
                        this.props.dispatch(setLoadData(ActivityData));
                    });
                });
            });
        } else {
            const CarouselIndex = func.getIndexByLoadData('banner', this.props.loadData);
            const ProductIndex = func.getIndexByLoadData('recommend', this.props.loadData);
            const ActivityIndex = func.getIndexByLoadData('activity', this.props.loadData);
            this.setState({
                CarouselData: this.props.loadData[CarouselIndex].data,
                ProductData: this.props.loadData[ProductIndex].data,
                activityData: this.props.loadData[ActivityIndex].data,
            })
        }

    }

    // 首页轮播图
    handleSearchBanner = () => {
        return func.post(config.requestUrl.banner, {}).then(req => {
            if (req.code === 1) {
                req.data.forEach((item, index) => {
                    item.visible = index === 0;
                });
                this.setState({CarouselData: req.data});
            }
        }).catch((err) => {
            console.error(err);
        });
    };

    //首页推荐商品
    handleSearchRecommendGoods = (need_typeName) => {
        return func.post(config.requestUrl.searchRecommendGoods, {type_name: need_typeName}).then(req => {
            if (req.code === 1) {
                this.setState({ProductData: req.data});
            }
        }).catch((error) => {
            console.error(error);
        })
    };

    //首页推荐活动
    handleSearchActivity = () => {
        return func.post(config.requestUrl.goodsActivity, {}).then((req) => {
            if (req.code === 1) {
                this.setState({activityData: req.data});
            }
        })
    }
}


const getLoadData = state => {
    return {
        loadData: state.setload,
    }
}

export default connect(getLoadData)(Index)