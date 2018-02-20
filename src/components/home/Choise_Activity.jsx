import React, {Component} from 'react';
import {config} from "../../lib/config";
import func from '../../lib/func';

class Choise_Activity extends Component {
    render(){
        return(
            <ul className="ChoiseAc_ul">
                {
                    this.props.activityData.map((activityItem,index)=>{
                        return(
                            <li key={index} className="ChoiseAc_li">
                                <div className="img_place">
                                    <span className="white_angel"></span>
                                    <img src={config.imgUrl + activityItem.file_path} />
                                </div>
                                <ul className="ChoiseAc_goods">
                                    {
                                        activityItem.activity_goods.map((item,acIndex)=>{
                                            return(
                                                <li onClick={()=>this.handleToGoodsContent(item.goods_id , item)} key={acIndex} className="ChoiseAc_goods_li">
                                                    <p className="goods_li_title">{item.goods_name}</p>
                                                    <p className="goods_li_explain">{item.goods_detail}</p>
                                                    <img src={config.imgUrl + item.file_path} className="goods_li_img" />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    componentDidMount(){

    }

    handleToGoodsContent = (goods_id,ProductItem) =>{
        func.setData('goodsData',ProductItem);
        this.props.history.push(config.path + '/goods/' + goods_id);
    }
}

export default Choise_Activity