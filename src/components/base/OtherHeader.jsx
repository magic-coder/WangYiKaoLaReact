import React,{Component} from 'react';
import return_icon from '../../image/icon/btn_back.png';

class CollectHeader extends Component{
    render(){
        return(
            <div className="flex flex-align-center collect_header">
                <a onClick={()=>this.handleReturnBack()}><img src={return_icon} /></a>
                {this.props.title_name}
            </div>
        )
    }
    handleReturnBack = () =>{
        this.props.history.goBack();
    }
}

export default CollectHeader