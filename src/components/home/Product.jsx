import React,{Component} from 'react';
import {config} from '../../lib/config';
import func from '../../lib/func';

class Product extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {ProductData} = this.props;
        return(
            <div className="content">
                <ul className="product_ul">
                    {
                        ProductData.map((ProductItem)=>{
                            return(
                                <li key={ProductItem.goods_id} className="product_li">
                                    <a className="img_block"><img onClick={()=>this.handleToGoodsContent(ProductItem.goods_id , ProductItem)} src={config.imgUrl + ProductItem.file_path} /></a>
                                    <p className="goods_title">{ProductItem.goods_name}</p>
                                    <p className="before_price">原价¥<del>{ProductItem.before_price}</del></p>
                                    <p className="after_price">售价¥{ProductItem.after_price}<span className="discount">{ProductItem.discount_explain}</span></p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    handleToGoodsContent = (goods_id,ProductItem) =>{
        func.setData('goodsData',ProductItem);
        this.props.history.push(config.path + '/goods/' + goods_id);
    }
}

export default Product