import React,{Component} from 'react';
import '../../css/Index.css';
import SearchIcon from '../../image/icon/search_icon.png';
import return_icon from '../../image/icon/btn_back.png';

import {connect} from 'react-redux';
import {addSearchHistory} from "../../store/action";

class SearchHead extends Component{
    constructor(){
        super();
        this.state = {
            searchDetail:'',
        };
    }
    render(){
        return(
            <header className="headerSearch flex flex-align-center">
                <img onClick={()=>this.handleReturn()} className="returns" src={return_icon}/>
                    <div className="search">
                        <img className="search_icon" src={SearchIcon}/>
                        <input onChange={(e)=>this.handleChangeSearch(e)} placeholder="气垫粉底" />
                    </div>
                <div onClick={()=>this.handleSearch()} className="search_btn">搜索</div>
            </header>
        )
    }
    handleSearch = () =>{
        let detail = this.state.searchDetail === '' ? '气垫粉底' : this.state.searchDetail;
        this.props.dispatch(addSearchHistory(detail));
    }
    handleChangeSearch = (e) =>{
        this.setState({searchDetail:e.target.value});
    }
    handleReturn = () =>{
        this.props.history.goBack();
    }
}

export default connect()(SearchHead)