import React,{Component} from 'react';

class Activity extends Component{
    render(){
        return(
            <div className="activity">
                <div className="top_activity">
                    <div className="left_activity">
                        <p className="activity_title">
                            限时购
                            <a className="activity_timeClock">
                                <span>02</span>:
                                <span>32</span>:
                                <span>13</span>
                            </a>
                            <a className="time_clock">17点场</a>
                        </p>
                        <ul className="activity_goods">
                            <li>
                                <dl>
                                    <dt className="activity_img"><img src="https://haitao.nosdn2.127.net/e5c049b11d9f4d5fa823147ee68e4b651510318842800j9twudg319229.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></dt>
                                    <dd className="activity_price"><span className="rmb">¥</span>197<span className="cut_price"><span className="rmb">¥</span>896</span></dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt className="activity_img"><img src="https://haitao.nosdn2.127.net/e5c049b11d9f4d5fa823147ee68e4b651510318842800j9twudg319229.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></dt>
                                    <dd className="activity_price"><span className="rmb">¥</span>197<span className="cut_price"><span className="rmb">¥</span>896</span></dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <div className="right_activity">
                        <p className="activity_title change_height">
                            每日上新
                        </p>
                        <p className="activity_explain">
                            每日9点，折扣超前
                        </p>
                        <ul className="activity_goods">
                            <li className="right_activity_margin">
                                <dl>
                                    <dt className="activity_img"><img src="https://haitao.nosdn2.127.net/e5c049b11d9f4d5fa823147ee68e4b651510318842800j9twudg319229.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></dt>
                                </dl>
                            </li>
                            <li className="right_activity_margin">
                                <dl>
                                    <dt className="activity_img"><img src="https://haitao.nosdn2.127.net/e5c049b11d9f4d5fa823147ee68e4b651510318842800j9twudg319229.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></dt>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="bottom_activity">
                    <ul className="bottom_ul">
                        <li>
                            <p className="activity_bottom_title">国家馆</p>
                            <p className="activity_bottom_explain">逛遍全球</p>
                            <div className="activity_bottom_img"><img src="https://haitao.nosdn2.127.net/e5c049b11d9f4d5fa823147ee68e4b651510318842800j9twudg319229.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></div>
                        </li>
                        <li>
                            <p className="activity_bottom_title">国家馆</p>
                            <p className="activity_bottom_explain">逛遍全球</p>
                            <div className="activity_bottom_img"><img src="https://haitao.nosdn2.127.net/e5c049b11d9f4d5fa823147ee68e4b651510318842800j9twudg319229.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></div>
                        </li>
                        <li>
                            <p className="activity_bottom_title">国家馆</p>
                            <p className="activity_bottom_explain">逛遍全球</p>
                            <div className="activity_bottom_img"><img src="https://haitao.nosdn2.127.net/e5c049b11d9f4d5fa823147ee68e4b651510318842800j9twudg319229.jpg?imageView&thumbnail=400x0&quality=75&type=webp" /></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Activity