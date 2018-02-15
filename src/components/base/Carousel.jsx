import React,{Component} from 'react';
import '../../css/Index.css';
import {config} from '../../lib/config';
let phone_width = 0;    /*对应屏幕的宽度*/
let carousel_Index = 0;   /*touchStart事件中获取到的对应index值*/
let x_distance = 0;    /*touch事件中x轴移动的距离*/
class Carousel extends Component {
    constructor(){
        super();
        this.state = {
            CarouselData : [],
        }
    }
    render(){
        return(
            <div className="carousel">
                <div className="carousel_wrapper">
                {
                    this.state.CarouselData.map((item,index)=>{
                        return(
                            <div key={item.id} onTouchStart={(e)=>this.handleTouchStart(e,index)} onTouchEnd={(e)=>this.handleTouchEnd(e)} style={{display:item.visible ? 'block':'none',opacity:item.visible ? '1':'0'}} className={item.visible ? "animation carousel_container" : "carousel_container"}>
                                <img src={config.imgUrl + item.file_path} />
                            </div>
                        )
                    })
                }
                </div>
                <div className="carousel_pagination">
                    {
                        this.state.CarouselData.map((paginationItem,paginationIndex)=>{
                            return(
                                <span key={paginationIndex} className={paginationItem.visible ? "pagination pagination_acti" : "pagination"}>{}</span>
                            )
                        })
                    }
                </div>

            </div>
        )
    }

    componentDidMount(){
        phone_width = document.querySelector('body').offsetWidth;
    }

    componentWillReceiveProps(nextProps){
        nextProps.Carousel.length > 0 ? this.setState({CarouselData:nextProps.Carousel}) : '';
    }

    handleTouchStart = (e,index) =>{
        carousel_Index = index;
        x_distance = e.changedTouches[0].pageX;
    }

    handleTouchEnd = (e) =>{
        /*当左移或右移超过屏幕宽度的20%时才执行切换*/
        if(e.changedTouches[0].pageX - x_distance >= (phone_width * 0.2) || e.changedTouches[0].pageX - x_distance <= (-phone_width * 0.2)){
            let CarouselData = this.state.CarouselData;
            if(e.changedTouches[0].pageX - x_distance > 0){
                carousel_Index = carousel_Index > 0 ? --carousel_Index : this.state.CarouselData.length - 1;
            }else{
                carousel_Index = carousel_Index >= this.state.CarouselData.length - 1 ? 0 : ++carousel_Index;
            }
            CarouselData.forEach((arrItem,arrIndex)=>{
                arrIndex === carousel_Index ? arrItem.visible = true : arrItem.visible = false;
            });
            this.setState({CarouselData});
        }
    }
}

export default Carousel