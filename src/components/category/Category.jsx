import React, {Component} from 'react';
import '../../css/category.css';
import HeaderSearch from '../base/HeaderSearch';
import sale_arrow from '../../image/icon/hot_sale_arrow.png';
import func from '../../lib/func';
import {config} from "../../lib/config";
import {connect} from 'react-redux';
import {setLoadData} from "../../store/action";

class Category extends Component {
    constructor() {
        super();
        this.state = {
            SlideName: '',
            SlideFlag: false,
            subData: [],
            TypeData: [],
        };
    }

    render() {
        return (
            <div style={{overflow: 'hidden'}} className="home">
                <HeaderSearch history = {this.props.history} />
                <div style={{transform: this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)'}}
                     className={this.state.SlideFlag ? "slide" : ""}>
                    <div className="category_container">
                        <ul className="left_bar">
                            {
                                this.state.TypeData.map((typeItem, typeIndex) => {
                                    return (
                                        <li key={typeIndex} onClick={() => this.handleClickType(typeIndex)}
                                            className="bar_item">
                                            <p className="menu_text">
                                                <a className={typeItem.visible ? "active menu_area" : "menu_area"}>{typeItem.type_name}</a>
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="right_content">
                            {
                                this.state.subData.map((subItem, subIndex) => {
                                    return (
                                        <div key={subIndex}>
                                            <p className="right_brand_top">
                                                <span className="type_name">{subItem.type_name}</span>
                                                <a>热销榜&nbsp;<img src={sale_arrow}/></a>
                                            </p>
                                            <ul className="right_brand_ul">
                                                {
                                                    subItem.subList.map((thrItem, thrIndex) => {
                                                        return (
                                                            <li key={thrIndex}>
                                                                <dl>
                                                                    <dt><img
                                                                        src="https://haitao.nos.netease.com/iy59mwdq87_800_800.jpg?imageView&thumbnail=400x0&quality=75&type=webp"/>
                                                                    </dt>
                                                                    <dd>{thrItem.type_name}</dd>
                                                                </dl>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentWillMount() {
        const lastName = func.getData('slideName');
        const backArray = ['search','cart','person'];

        const slideName = func.slide(lastName,backArray);
        this.setState({SlideName: slideName});
    }

    componentDidMount() {
        const that = this;
        setTimeout(function () {
            that.setState({SlideFlag: true});
        }, 0);
        func.setData('slideName','category');
        if(!func.checkLoadDetail('category',this.props.loadData)){
            this.handleSearchAllType().then(()=>{
                const categoryData = {name:'category',data:this.state.TypeData};
                this.props.dispatch(setLoadData(categoryData));
            });
        }else{
            const categoryIndex = func.getIndexByLoadData('category',this.props.loadData);
            this.setState({
                TypeData : this.props.loadData[categoryIndex].data,
            },()=>{
                this.handleClickType(0);
            });
        }

    }

    handleSearchAllType = () => {
        return func.post(config.requestUrl.searchAllType, {}).then((req) => {
            if (req.code === 1) {
                /**
                 * 先把一级分类取出来
                 */
                let typeList = [];
                req.data.forEach((item, index) => {
                    if (item.type_level === "1") {
                        typeList.push(item);
                    }
                });
                // 二三级的做对应归类
                typeList.forEach((item) => {
                    func.loop(item, req.data);
                });
                this.setState({TypeData: typeList}, () => {
                    this.handleClickType(0);
                });
            }
        })
    };
    handleClickType = (index) => {
        const TypeData = this.state.TypeData;
        TypeData.forEach((item, typeIndex) => {
            if(index === typeIndex){
                item.visible = true;
                this.setState({subData: item.subList});
            }else{
                item.visible = false;
            }
        });
        this.setState({TypeData});
    }
}

const getLoadData = state =>{
    return {
        loadData : state.setload,
    }
}

export default connect(getLoadData)(Category)