import {combineReducers} from 'redux';
import {CLICK_BAR, ADD_CART, CHOISE_CAR, TOGGLE_CAR , CHANGE_CAR_COUNT, DELETE_CAR , ADD_COLLECT} from './action';

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


const clickApp = combineReducers({
    click,
    cart,
    collectGoods,
});

export default clickApp