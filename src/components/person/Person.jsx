import React,{Component} from 'react';
import '../../css/person.css';
import headimg from '../../image/goods/headimg.png';

import {connect} from 'react-redux';
import {config} from "../../lib/config";
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
            </div>
        )
    }
}

const getCollectList = state => {
    return {
        collectGoods : state.collectGoods
    }
}
export default connect(getCollectList)(Person)