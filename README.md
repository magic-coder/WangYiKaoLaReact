## 写在前面\<br>
这是一个尝试用react语法写的网易考拉，即将毕业实习，所以当做是一次练习，如涉及侵权立删。\<br>

## 技术栈\<br>
react16.2.0 + react-router-dom16.2.0 + redux3.7.2 + less + es6 ，数据使用eolinker接口管理来模拟，请求方法基于request-promise4.2.2。\<br>
页面切换使用原生路由动画方法。\<br>

## 文件夹说明\<br>
config - 配置文件夹\<br>
src {\<br>

    lib (共用js文件夹){\<br>
        config.js : 存放path , file_path, imgUrl , 请求地址之类的路径，统一管理;\<br>
        func.jsx  :  封装了可能会用到的方法，路由动画，ajax请求，存、取、清值(localStorage)等，防止组件中用到还要再重写一遍;\<br>
        rem2px.js  : 自动计算html的px值;\<br>
    }\<br>

    store (redux相关) {\<br>
        此处存放action和reducer相关文件。\<br>
    }\<br>

    components (组件文件夹) {\<br>
        base(基础组件){\<br>
                Carousel.jsx   轮播组件\<br>
                Footer.jsx 共用底部栏组件\<br>
                HeaderSearch.jsx 共用头部组件\<br>
                Modal.jsx 弹出框\<br>
        }\<br>
       ...其他各页面对应组件\<br>
\<br>
       RouterIndex.jsx 路由文件\<br>
    }\<br>
\<br>
}

## 已完成
页面整体框架。

## 待完成
首页的图标绘制。\<br>
抢购、精选活动接口以及数据的对接。\<br>
搜索商品。\<br>
轮播组件用户体验优化。\<br>
路由切换方法重写(配合before_urlName定义左或右切换)。\<br>
购物车推荐商品接口。\<br>
种草社区页面。\<br>
已加载的数据返回时不再请求。\<br>
页面完善与兼容性。\<br>
用户体验，性能等方面(如添加购物车成功后新增提示toast等);\<br>


## 克隆和启动
git clone https://github.com/a838189349/WangYiKaoLaReact.git\<br>

npm install 或 yarn install\<br>

npm start\<br>
