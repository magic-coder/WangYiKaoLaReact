import React, {Component} from 'react';

class SortList extends Component{
    render(){
        return(
            <ul className="sort_ul">
                {
                    this.props.Sort.map((item,index)=>{
                        return(
                            <li key={index} className="sort_li">
                                <dl>
                                    <dt><img className="sort_icon" src="https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar"/></dt>
                                    <dd>美妆</dd>
                                </dl>
                            </li>
                        )
                    })
                }
                <div className="clearfix"></div>
            </ul>
        )
    }
}

export default SortList