import React,{Component} from 'react';
import SearchHead from './SearchHead';
import SearchBefore from './SearchBefore';
import '../../css/Search.css';
import {config} from "../../lib/config";
import func from '../../lib/func';

class Search extends Component{
    constructor(){
        super();
        this.state = {
            brand_ul : [],
            search_ul : [],
            recent_ul : [],
        }
    }
    render(){
        return(
            <div className="home search_content">
                <SearchHead/>
                <div className="search_box">
                    <SearchBefore {...this.state} />
                </div>
            </div>
        )
    }
    componentWillMount(){

    }
    componentDidMount(){
        this.handlecheckDetai();
    }
    handlecheckDetai = () =>{
        return func.post(config.requestUrl.searchData,{}).then((req)=>{
            if(req.code === 1){
                req.brand_data.forEach((item)=>{
                    item.colorData = func.getRanDomColor();
                });
                this.setState({brand_ul:req.brand_data,search_ul:req.search_data});
            }
        })
    }
}

export default Search