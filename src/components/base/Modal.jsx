import React,{Component} from 'react';

class Modal extends Component{
    constructor(){
        super();
    }
    render(){
        const props = this.props;
        return(
            <div className="modal_container">
                <div className="modal">
                    <p>{props.modalContent}</p>
                    <div className="btm_btn">
                        <span className="btn left-btn" onClick={props.onLeftClick}>{props.leftBtn.text}</span>
                        <span className="btn right-btn" onClick={props.onRightClick}>{props.rightBtn.text}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal