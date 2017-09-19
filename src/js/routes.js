/**
 * 路由配置文件
 */
// 实现页面加载的时候异步加载文件
// 首页
const HomeContainer = r => require.ensure([], () => r(require('../containers/HomeContainer.vue')), 'home')
// 电影页
const MovieContainer = r => require.ensure([], () => r(require('../containers/MovieContainer.vue')), 'movie')
// 电影详情页
const MovieDetailContainer = r => require.ensure([], () => r(require('../containers/MovieDetailContainer.vue')), 'moviedetail')
// 关于页
const AboutContainer = r => require.ensure([], () => r(require('../containers/AboutContainer.vue')), 'about')
// Mock
const MockContainer = r => require.ensure([], () => r(require('../containers/MockContainer.vue')), 'mock')
// Mock Page List
const MockPageListContainer = r => require.ensure([], () => r(require('../containers/MockPageListContainer.vue')), 'mockpage')
// 404页
const NoFindContainer = r => require.ensure([], () => r(require('../containers/NoFindContainer.vue')), '404')

export default[
    {
        path:'/home',
        component:HomeContainer
    },
    {
        path:'/movie',
        component:MovieContainer
    },
    {
        path:'/mock',
        component:MockContainer
    },
    {
        path:'/mockpage',
        component:MockPageListContainer
    },
    {path:'/movie/detail/:id',component:MovieDetailContainer}, 
    // {
    //     path:'/movie',component:MovieContainer,
    //     beforeEnter: (to, from, next) => { // 单个路由的导航钩子
    //         next();
    //     },
    //     children:[
    //         // {path:'',component:MovieContainer}, // 设置默认页面
    //         {path:'detail/:id',component:MovieDetailContainer} // 电影详情
    //     ]
    // },
    {path:'/about/:name*',component:AboutContainer}, // *表示name参数可有可无
    {path:'/',redirect:'/home'}, // 如果路由为/的时候跳转到/home路由
    {path:'*',component:NoFindContainer} // 此配置要放在最下面，如果没有匹配到路由则404
]