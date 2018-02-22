export const CLICK_BAR = 'CLICK_BAR';
export const ADD_CART = 'ADD_CART';
export const CHOISE_CAR = 'CHOISE_CAR';
export const TOGGLE_CAR = 'TOGGLE_CAR';
export const CHANGE_CAR_COUNT = 'CHANGE_CAR_COUNT';
export const DELETE_CAR = 'DELETE_CAR';
export const DELETE_CARS = 'DELETE_CARS';

export const ADD_COLLECT = 'ADD_COLLECT';

export const ADD_SEARCH_HISTORY = 'ADD_SEARCH_HISTORY';
export const DELE_SEARCH_HISTORY = 'DELE_SEARCH_HISTORY';

export const ALREADY_LOAD = 'ALREADY_LOAD';

export const ADD_ORDER = 'ADD_ORDER';
export const DELE_ORDER = 'DELE_ORDER';

/**
 * action 创建函数
 */
export function clickBar(index){
    return {type : CLICK_BAR , index};
}

/**
 * 以下是和购物车有关的方法
 * @param cartData
 */
export function addCart(cartData){
    return {
        type : ADD_CART ,
        cartData : cartData,
    }
}

export function changeChoise(cartIndex){
    return {
        type : CHOISE_CAR,
        cartIndex,
    }
}

export function toggleCar(toggleFlag){
    return {
        type : TOGGLE_CAR,
        toggleFlag
    }
}

export function changeCartCount(cartIndex,changeType){
    return {
        type : CHANGE_CAR_COUNT,
        cartIndex,
        changeType,
    }
}

export function deleteCartData(deleteIndex){
    return {
        type : DELETE_CAR,
        deleteIndex
    }
}

export function deleteCartDatas(){
    return {
        type : DELETE_CARS,
    }
}

/**
 * 以下是和收藏有关的方法
 */

export function addCollect (CollectData) {
    return {
        type : ADD_COLLECT,
        CollectData
    }
}

/**
 * 以下是搜索的方法
 */
export function addSearchHistory (SearchTitle){
    return {
        type : ADD_SEARCH_HISTORY,
        SearchTitle
    }
}
export function deleSearchHistory (){
    return {
        type : DELE_SEARCH_HISTORY,
    }
}

/**
 * 执行请求后的方法，把对应的页面值和data存起来，第二次访问时不作重新请求。
 */
export function setLoadData(LoadData){
    return {
        type : ALREADY_LOAD,
        LoadData
    }
}

export function addOrder(orderData){
    return {
        type : ADD_ORDER,
        orderData
    }
}

export function deleOrder(orderIndex){
    return {
        type : DELE_ORDER,
        orderIndex,
    }
}