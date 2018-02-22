## 写在前面
这是一个尝试用react写的网易考拉，过年回家这几天没事做，因为即将要开始毕业实习，所以抽空写一些小项目练练手，可能刚开始不是写的很好，但是我真的很喜欢前端。
我目前的技术栈是react + react-router + redux + less + antd/antpro|| icedesign + nodejs;
也在尝试react-native、weex、(vue,vuex,vue-router,vue-cli)。   以后会经常往github上传和这些有关的东西。

![](http://www.z4a.net/images/2018/02/22/b.gif)

### 项目目录

![](http://www.z4a.net/images/2018/02/22/c.png)

## 技术栈
* create react app (react(16.2.0)的脚手架)
* react-router-dom 16.2.0
* redux3.7.2(状态管理)
* less
* es6
* eolinker(接口管理，简易mock)
* request-promise4.2.2(请求基层)
* react-lazyload(图片懒加载)

## 文件夹说明
## lib (共用js文件夹)
*        config.js : 存放path , file_path, imgUrl , 请求地址之类的路径，统一管理;
*        func.jsx  :  封装了可能会用到的方法，路由动画，ajax请求，存、取、清值(localStorage)等，防止组件中用到还要再重写一遍;
*        rem2px.js  : 自动计算html的px值;


## 已完成
* 页面整体框架。
* 搜索记录。
* 购物车增减数量，删除。
* 收藏商品。
* 下单，删除订单。
* 首页图标绘制。
* 大部分数据mock。
* 已加载过数据的页面再次返回时不做请求。

## 数据请求：

* EOLINKER(管理接口，简易mock);
* request-promise(ajax方法的基库);

## 已做优化:
* 路由切割，对应页面加载对应js，经gizp2级压缩后的main.js为497k;
* 图片懒加载。


## 待完成
* 搜索商品。

* 轮播组件用户体验优化。

* 路由切换方法重写(配合before_urlName定义左或右切换)。


* 种草社区页面，各栏目页面。

* 页面与功能完善以及兼容性。

* 用户体验，性能等方面(需新增loading，toast等);

## 方法详情
1、路由动画。
* ![](http://www.z4a.net/images/2018/02/22/d5cf15546d55c80ce0b243fb8d986d7.png)

* 通过传入一个back数组以及上一个页面的名字来判定translateY的值是100%还是-100%;
* 在componentDidMount时设置一个setTimeout给slideFlag，防止他和slideName一起进入setState的dirtycomponent队列，同时渲染完可能会出现没有transition效果。
* 当slideFlag为true时，将translateX强行改为0%，配合transition 可以实现类似路由动画的效果。

* ![](http://www.z4a.net/images/2018/02/22/0ae5f654649481eb86c8564e1793c41.png)

.slide{
    transform: translateX(0%) !important;
    transition: all .3s ease 0s;
}

* ![](http://www.z4a.net/images/2018/02/22/57ba25a683695d15840fc1b327a291d.md.png)

2、请求判断
* ![](http://www.z4a.net/images/2018/02/22/0d799f3e322d568e6ec04c6a20b9b07.png)
* 该方法传入一个对应请求的name和reducer中存储的loadData(已请求过的);
* 当name并不存在于loadData中时，return一个false，并执行请求。请求成功后将对应值存入loadData;
* 当name存在时，调用getIndexByLoadData方法获取到name在loadData中对应的index值，通过setState方法把对应数据赋值。
* 达到不做重复请求的功能。
* ![](http://www.z4a.net/images/2018/02/22/24e84082c69146e48888b5e5d3cc50e.png)


## 克隆和启动
	#克隆项目
	git clone https://github.com/a838189349/WangYiKaoLaReact.git
	
	# 安装依赖
	npm install 或 yarn install
	
	# 本地开发环境
	npm start
	
	# 构建生产
	npm run build
