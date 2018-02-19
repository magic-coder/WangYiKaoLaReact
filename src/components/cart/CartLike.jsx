import React, {Component} from 'react';
import {config} from "../../lib/config";

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
                                <a className="img_block"><img
                                    src={config.imgUrl + item.file_path}/></a>
                                <p className="goods_title">{item.goods_name}</p>
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
}

export default CartLike