import React,{Component} from 'react';
import deleteIcon from '../../image/icon/delete_icon.png';

import {connect} from 'react-redux';
import {deleSearchHistory} from "../../store/action";

import Modal from '../base/Modal';
const ModalContent = {
    modalContent: '确定要清空搜索记录吗~~~QAQ',
    leftBtn: {
        text: '暂时不'
    },
    rightBtn: {
        text: '确定'
    }
};

class SearchBefore extends Component{
    constructor(){
        super();
        this.state = {
            ModalFlag : false,
        }
    }
    render(){
        const {search} = this.props;
        return(
            <div className="before_content">
                {
                    this.state.ModalFlag ? <Modal
                        {...ModalContent}
                        onLeftClick={() => this.handleControlModal()}
                        onRightClick = {()=>this.handleClearSearchHistory()}
                    /> : ''
                }
                <ul className="before_ul">
                    <p>最近搜索</p>
                    {
                        search.map((item,index)=>{
                            return(
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                    {search.length === 0 ? <p style={{textAlign:'center'}}>还没有搜索过东西哦</p> :''}
                    <a onClick={() => this.handleControlModal('')} className="dele_ul"><img src={deleteIcon} /></a>
                </ul>
                <ul className="before_ul">
                    <p>搜索发现</p>
                    {
                        this.props.search_ul.map((item,index)=>{
                            return(
                                <li key={index}>{item.title}</li>
                            )
                        })
                    }
                </ul>
                <ul className="before_ul brand_ul">
                    <p>常用分类</p>
                    {
                        this.props.brand_ul.map((item,index)=>{
                            return(
                                <li style={{backgroundColor:'rgba('+item.colorData[0]+','+item.colorData[1]+','+item.colorData[2]+',.08)'}} key={index}>{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){

    }
    handleControlModal = () =>{
        this.setState({ModalFlag:!this.state.ModalFlag});
    }
    handleClearSearchHistory = () =>{
        this.props.dispatch(deleSearchHistory());
        this.handleControlModal();
    }
}

const getList = state =>{
    return {
        search : state.search,
    }
}

export default connect(getList)(SearchBefore);