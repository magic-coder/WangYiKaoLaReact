import React,{Component} from 'react';
import '../../css/Index.css';
import nopage from '../../image/goods/sleep.png';
import Header from '../base/OtherHeader';
import func from '../../lib/func';

class NoPage extends Component{
    constructor(){
        super();
        this.state = {
            SlideName : '',
            SlideFlag : false,
        }
    }
    render(){
        return(
            <div className="home">
                <Header title_name = '嘤嘤嘤还没做' {...this.props} />
                <div  style={{transform:this.state.SlideName === 'slide-go' ? 'translateX(100%)' : 'translateX(-100%)'}} className={this.state.SlideFlag ? "slide nopage" : "nopage"}>
                    <img src={nopage} />
                </div>
            </div>
        )
    }
    componentWillMount(){
        const slideName = func.slide('2');
        this.setState({SlideName:slideName});
    }
    componentDidMount(){
        const that = this;
        setTimeout(function(){
            that.setState({SlideFlag:true});
        },0);
    }
}

export default NoPage