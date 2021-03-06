/*emmm 这里准备的是可能会用到的一些方法和参数，防止到时候还要在组件里重新写，就是这么贴心*/
import request from 'request-promise';
import {config} from './config';

const func = {
    /**
     * 路由动画
     * @param BackName  启动back动画的数组
     */
    slide (name,BackName) {
        let flag = BackName.findIndex(function(value) {
            return value === name;
        });
        if(flag !== -1){
            return 'slide-back';
        }else{
            return 'slide-go';
        }
    },

    /**
     * ajax请求的方法
     * @url 传入的url
     * @data 参数集合
     * */
    post(url, data) {
        const option = {form: data, method: 'POST'};
        return this.ajax(url, option);
    },

    get(url, data) {
        const option = {qs: data, method: 'GET'};
        return this.ajax(url, option);
    },

    /**
     * 因为使用的是eolinker模拟数据，所以返回的是一个String而非Object，这里使用eval将他转换为Object
     * @function eval
     */
    ajax(url, option){
        option.uri = config.serverUrl + url;
        option.json = true;
        return request(option).then(req =>{
            return Promise.resolve(eval('(' + req + ')'));
        }).catch(err =>{
            return Promise.reject(err);
        })
    },


    /**
     * 存、取、清值(localStorage)
     * @key 键名
     * @value 要存的变量
     * setData时假设存的是一个数组，这边直接stringify转成字符串，getData时再parse转成数组，就是这么贴心。
     * */
    setData : function (key, value) {
        if(!value){ return; }
        if( typeof value == 'object') {
            localStorage.setItem(key , JSON.stringify(value));
        } else {
            localStorage.setItem(key, value);
        }
    },
    /**
     * 获取存储的值
     * @key 需要取值的名字
     * @defaultData 当要取的值是空时，返回这个defaultData;
     */
    getData : function (key , defaultData) {
        let re = localStorage.getItem(key);
        try {
            return re ? JSON.parse(re) : defaultData;
        } catch (e) {
            return re;
        }
    },

    /**
     * 清空对应数据
     * */
    clearData(key) {
        localStorage.removeItem(key);
    },


    /**
     * 将一二三级分类归在一起的方法。(递归)
     * @param type 传进来的type
     * @param data allType数组
     */
    loop (type , data) {
        let typeList = [];
        data.map((item)=>{
            if(type.type_id === item.type_parentId){
                typeList.push(item);
                type.subList = typeList;
                this.loop(item , data);
            }
        })
    },

    /**
     * 获取三个随机颜色数值(0-255);
     * Math.random() * (max - min) + min;
     */
    getRanDomColor(){
        let ColorArr = [];
        for(let i = 0 ; i<3 ; i++){
            ColorArr.push(parseInt(Math.random() * 255));
        }
        return ColorArr;
    },

    /**
     * 查看该页面有没有执行过请求的方法。用于判断是否需要执行ajax请求。
     */
    checkLoadDetail(loadName,loadData){
        let flag = false;
        loadData.forEach((item)=>{
            if(item.name === loadName){
                flag = true;
            }
        });
        return flag;
    },
    /*查看在已加载数组中对应名字的索引值*/
    getIndexByLoadData (loadName , loadData) {
        let turnIndex = 0;
        loadData.forEach((item,index)=>{
            if(item.name === loadName){
                turnIndex = index;
            }
        });
        return turnIndex;
    }

};

export default func