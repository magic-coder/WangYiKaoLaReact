import React,{Component} from 'react';
import '../../css/Index.css';
import SearchIcon from '../../image/icon/search_icon.png';
import SearchQR from '../../image/icon/icon_scan_qr_code.png';

class SearchHead extends Component{
    render(){
        return(
            <header className="headerSearch flex flex-align-center">
                <img  className="scan_qr_code" src={SearchQR}/>
                    <div className="search">
                        <img className="search_icon" src={SearchIcon}/>
                        <input placeholder="气垫粉底" />
                    </div>
                <div className="search_btn">搜索</div>
            </header>
        )
    }
}

export default SearchHead