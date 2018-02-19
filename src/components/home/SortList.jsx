import React, {Component} from 'react';
import meizhuang from '../../image/icon/meizhuang.png';
import muying from '../../image/icon/muying.png';
import zuanshi from '../../image/icon/zuanshi.png';
import baojian from  '../../image/icon/baojian.png';
import shuma from '../../image/icon/shuma.png';
import fushi from '../../image/icon/fushi.png';
import chaoshi from '../../image/icon/chaoshi.png';
import airplane from '../../image/icon/airplane.png';
import cemera from '../../image/icon/camera.png';
import vip from '../../image/icon/vip.png';

import {config} from "../../lib/config";

class SortList extends Component{
    render(){
        return(
            <ul className="sort_ul">
                  <li onClick={()=>this.handleToNoPage()} className="sort_li">
                    <dl>
                       <dt><img className="sort_icon" src={meizhuang}/></dt>
                       <dd>美妆</dd>
                    </dl>
                  </li>
                <li onClick={()=>this.handleToNoPage()} className="sort_li">
                    <dl>
                        <dt><img className="sort_icon" src={muying}/></dt>
                        <dd>母婴</dd>
                    </dl>
                </li>
                <li onClick={()=>this.handleToNoPage()} className="sort_li">
                    <dl>
                        <dt><img className="sort_icon" src={zuanshi}/></dt>
                        <dd>轻奢</dd>
                    </dl>
                </li>
                <li onClick={()=>this.handleToNoPage()} className="sort_li">
                    <dl>
                        <dt><img className="sort_icon" src={baojian}/></dt>
                        <dd>营养保健</dd>
                    </dl>
                </li>
                <li onClick={()=>this.handleToNoPage()} className="sort_li">
                    <dl>
                        <dt><img className="sort_icon" src={shuma}/></dt>
                        <dd>数码家电</dd>
                    </dl>
                </li>
                <li onClick={()=>this.handleToNoPage()} className="sort_li">
                    <dl>
                        <dt><img className="sort_icon" src={fushi}/></dt>
                        <dd>服饰馆</dd>
                    </dl>
                </li>
                <li onClick={()=>this.handleToNoPage()} className="sort_li">
                    <dl>
                        <dt><img className="sort_icon" src={chaoshi}/></dt>
                        <dd>考拉超市</dd>
                    </dl>
                </li>
                <li onClick={()=>this.handleToNoPage()} className="sort_li">
                    <dl>
                        <dt><img className="sort_icon" src={airplane}/></dt>
                        <dd>全球旗舰</dd>
                    </dl>
                </li>
                <li onClick={()=>this.handleToNoPage()} className="sort_li">
                    <dl>
                        <dt><img className="sort_icon" src={cemera}/></dt>
                        <dd>户外摄影</dd>
                    </dl>
                </li>
                <li onClick={()=>this.handleToNoPage()} className="sort_li">
                    <dl>
                        <dt><img className="sort_icon" src={vip}/></dt>
                        <dd>黑卡专享</dd>
                    </dl>
                </li>
                <div className="clearfix">{}</div>
            </ul>
        )
    }
    handleToNoPage = () =>{
        this.props.history.push(config.path + '/nopage');
    }
}

export default SortList