import React, {Component} from 'react';
import SearchIcon from '../../image/icon/search_icon.png';
import SearchQR from '../../image/icon/icon_scan_qr_code.png';
import menu_message from '../../image/icon/title_menu_message.png';
import {config} from "../../lib/config";


class HeaderSearch extends Component {
    render() {
        const {index} = this.props;
        return (
            <header className="headerSearch flex flex-align-center">
                <img style={{visibility:index && index[0] && index[0].index === '3' ? 'hidden' : ''}} className="scan_qr_code" src={SearchQR}/>
                {index && index[0] && index[0].index === '3' ?
                    <span className="header_title">购物车</span>
                    :
                    <div onClick={()=>this.handleToSearch()} className="search">
                        <img className="search_icon" src={SearchIcon}/>
                        <p>Sulwhasoo养肤气垫</p>
                    </div>
                }
                {index && index[0] && index[0].index === '3' ?
                    <span>{}</span>
                    :
                    <img className="menu_message" src={menu_message}/>
                }
            </header>
        )
    }
    handleToSearch = () =>{
        this.props.history.push(config.path + '/search');
    }
}

export default HeaderSearch