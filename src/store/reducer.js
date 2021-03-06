import {combineReducers} from 'redux';
import {
    CLICK_BAR,
    ADD_CART,
    CHOISE_CAR,
    TOGGLE_CAR ,
    CHANGE_CAR_COUNT,
    DELETE_CAR ,
    DELETE_CARS,
    ADD_COLLECT ,
    ADD_SEARCH_HISTORY ,
    DELE_SEARCH_HISTORY ,
    ALREADY_LOAD,
    ADD_ORDER,
    DELE_ORDER,
} from './action';

function click(state = [], action) {
    switch(action.type){
        case CLICK_BAR:
            return [
                {
                    index :action.index,
                }
            ];
        default : return state
    }
}

function cart(state = [] , action){
    switch(action.type){
        case ADD_CART :
            //设一个flag 当有添加的在购物车数组已经存在的情况时，让这个flag变为true，并且对应商品数量自增，当flag为true时，直接把state给return回去。
            //否则新增商品。
            let countflag = false;
            state.forEach((item)=>{
                if(item.goods_id === action.cartData.goods_id){
                    item.goods_count++;
                    countflag = true;
                }
            });
            if(countflag){
                return [...state]
            }else{
                action.cartData.choise = false;
                action.cartData.goods_count = 1;
                return [
                    ...state,
                    action.cartData,
                ];
            }
            break;
        case CHOISE_CAR :
            state[action.cartIndex].choise = !state[action.cartIndex].choise;
            return [...state];
            break;
        case TOGGLE_CAR :
            let cartflag = state.length === action.toggleFlag;
            state.forEach((toggleItem)=>{
                toggleItem.choise = !cartflag;
            });
            return [...state];
            break;
        case CHANGE_CAR_COUNT :
            let nowCount = state[action.cartIndex].goods_count;
            if(nowCount >= 1){
                state[action.cartIndex].goods_count = action.changeType === 'des' ? --nowCount : ++nowCount;
            }
            //数量不得为零，所以在这里判断得到的结果，假设为0就让他回到1，否则让他等于nowCount;
            state[action.cartIndex].goods_count = nowCount === 0 ? 1 : nowCount;
            return [...state];
            break;
        case DELETE_CAR :
            state.splice(action.deleteIndex,1);
            return [...state];
            break;
        case DELETE_CARS :
            state.forEach((item,index)=>{
                if(item.choise){delete state[index]}
            });
            let newArr = [];
            state.forEach((newItem)=>{
                if(newItem){newArr.push(newItem)}
            });
            state = newArr;
            return [...state];
            break;
        default : return state;
    }
}

function collectGoods (state = [], action) {
    switch (action.type) {
        case ADD_COLLECT :
            return [
                ...state,
                action.CollectData,
            ]
            break;

        default : return state
    }
}

function search (state = [], action) {
    switch (action.type) {
        case ADD_SEARCH_HISTORY :
            state.push(action.SearchTitle);
            let setArr = new Set(state);
            let newArr = Array.from(setArr);
            state = newArr;
            return [...state];
            break;
        case DELE_SEARCH_HISTORY :
            state = [];
            return [...state];
        default : return state
    }
}

function setload (state = [], action) {
    switch (action.type) {
        case ALREADY_LOAD :
            let flag = false;
            state.forEach((item)=>{
                if(item.name === action.LoadData.name){
                    flag = true;
                }
            });
            if(!flag){state.push(action.LoadData);}
            return [...state];
            break;
        default : return state;
    }
}

function order (state = [], action) {
    switch (action.type) {
        case ADD_ORDER :
            state.push(action.orderData);
            return [...state];
            break;
        case DELE_ORDER :
            delete state[action.orderIndex];
            let newArr = [];
            state.forEach((newItem)=>{
                if(newItem){newArr.push(newItem)}
            });
            state = newArr;
            return [...state];
            break;
        default : return state;
    }
}


const clickApp = combineReducers({
    click,
    cart,
    collectGoods,
    search,
    setload,
    order,
});

export default clickApp