import React,{Component} from 'react';
import headimg from '../../image/goods/headimg.png';
import wait_paid from  '../../image/icon/ic_pt_order_waiting_paid.png';
import wait_delivered from '../../image/icon/ic_pt_order_waiting_delivered.png';
import wait_received from '../../image/icon/ic_pt_order_waiting_received.png';
import wait_commented from '../../image/icon/ic_pt_order_waiting_commented.png';
import wait_returned from '../../image/icon/ic_pt_order_waiting_returned.png';
import {connect} from 'react-redux';
import {config} from "../../lib/config";
import func from '../../lib/func';
import {Link} from 'react-router-dom';


class Person extends Component{
    render(){
        const {collectGoods} = this.props;
        return(
            <div className="person_block">
                <div className="semi_circle">{}</div>
                <div className="person_msgbox">
                    <div className="person_box">
                        <div className="person_top">
                            <img className="head_img" src={headimg} />
                            <p className="user_name">宴</p>
                        </div>
                        <ul className="person_collect_ul">
                            <li>
                                <Link to={config.path + '/collect'}>
                                <dl>
                                    <dt>{collectGoods.length || 0}</dt>
                                    <dd>收藏</dd>
                                </dl>
                                </Link>
                            </li>
                            <li>
                                <dl>
                                    <dt>0</dt>
                                    <dd>关注</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>0</dt>
                                    <dd>足迹</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>0</dt>
                                    <dd>心得</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <div className="black_car_box">
                        <p>黑卡会员</p>
                    </div>
                </div>
                <div className="my_order">
                    <div className="order_title">
                        <a className="title">我的订单</a>
                        <a onClick={()=>this.handleToList(1)} className="check_all">查看全部</a>
                    </div>
                    <ul className="order_ul">
                        <li onClick={()=>this.handleToList(2)}>
                            <dl>
                                <dt><img src={wait_paid} /></dt>
                                <dd>待付款</dd>
                            </dl>
                        </li>
                        <li onClick={()=>this.handleToList(3)}>
                            <dl>
                                <dt><img src={wait_delivered} /></dt>
                                <dd>待发货</dd>
                            </dl>
                        </li>
                        <li onClick={()=>this.handleToList(4)}>
                            <dl>
                                <dt><img src={wait_received} /></dt>
                                <dd>待收货</dd>
                            </dl>
                        </li>
                        <li onClick={()=>this.handleToList(5)}>
                            <dl>
                                <dt><img src={wait_commented} /></dt>
                                <dd>待评价</dd>
                            </dl>
                        </li>
                        <li onClick={()=>this.handleToList(1)}>
                            <dl>
                                <dt><img src={wait_returned} /></dt>
                                <dd>退货退款</dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    handleToList = (type) =>{
        func.setData('ordertype',parseInt(type));
        this.props.history.push(config.path + '/orderlist');
    }
}

const getCollectList = state => {
    return {
        collectGoods : state.collectGoods
    }
}
export default connect(getCollectList)(Person)