## 写在前面
这是一个尝试用react语法写的网易考拉，即将毕业实习，所以当做是一次练习，如涉及侵权立删。

## 技术栈
react16.2.0 + react-router-dom16.2.0 + redux3.7.2 + less + es6 ，数据使用eolinker接口管理来模拟，请求方法基于request-promise4.2.2。
页面切换使用原生路由动画方法。

## 文件夹说明
config - 配置文件夹
src {

    lib (共用js文件夹){
        config.js : 存放path , file_path, imgUrl , 请求地址之类的路径，统一管理;
        func.jsx  :  封装了可能会用到的方法，路由动画，ajax请求，存、取、清值(localStorage)等，防止组件中用到还要再重写一遍;
        rem2px.js  : 自动计算html的px值;
    }

    store (redux相关) {
        此处存放action和reducer相关文件。
    }

    components (组件文件夹) {
        base(基础组件){
                Carousel.jsx   轮播组件
                Footer.jsx 共用底部栏组件
                HeaderSearch.jsx 共用头部组件
                Modal.jsx 弹出框
        }
       ...其他各页面对应组件

       RouterIndex.jsx 路由文件
    }

}

## 已完成
页面整体框架。

## 待完成
首页的图标绘制。
抢购、精选活动接口以及数据的对接。
搜索商品。
轮播组件用户体验优化。
路由切换方法重写(配合before_urlName定义左或右切换)。
购物车推荐商品接口。
种草社区页面。
已加载的数据返回时不再请求。
页面完善与兼容性。
用户体验，性能等方面(如添加购物车成功后新增提示toast等);


## 克隆和启动
git clone https://github.com/a838189349/WangYiKaoLaReact.git

npm install 或 yarn install

// start in localhost:3000
npm start
