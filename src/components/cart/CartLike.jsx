import React, {Component} from 'react';
import {config} from "../../lib/config";
import func from '../../lib/func';

/*布局问题*/
class CartLike extends Component {
    render() {
        const {LikeData} = this.props;
        return (
            <ul className="likely_ul">
                {
                    LikeData.map((item, index) => {
                        return (
                            <li key={index} className="likely_li">
                                <a onClick={()=>this.handleToGoodsContent(item.goods_id,item)} className="img_block"><img
                                    src={config.imgUrl + item.file_path}/></a>
                                <p  onClick={()=>this.handleToGoodsContent(item.goods_id,item)} className="goods_title">{item.goods_name}</p>
                                <div className="likely_reason">
                                    <span>小考拉：{item.goods_detail}</span>
                                </div>
                                <p className="after_price">售价¥{item.after_price}<span className="discount">自营</span><span
                                    className="activity_name">{item.discount_explain}</span></p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    handleToGoodsContent = (goods_id,ProductItem) =>{
        func.setData('goodsData',ProductItem);
        this.props.history.push(config.path + '/goods/' + goods_id);
    }
}

export default CartLike