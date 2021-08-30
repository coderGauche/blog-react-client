import React from 'react';
import { Redirect } from 'react-router-dom';

//博客首页
const ZFhome = React.lazy(() => import("@/pages/home")) 
//关于我
const ZFabout = React.lazy(() => import("@/pages/about"))
//归档
const ZFarchive = React.lazy(() => import("@/pages/archive"))
//动态
const ZFdynamic = React.lazy(() => import("@/pages/dynamic"))
//友链
const ZFfriendLinks = React.lazy(() => import("@/pages/friendLinks"))
//大杂烩
const ZFhodgepodge = React.lazy(() => import("@/pages/hodgepodge"))
//留言
const ZFmessage = React.lazy(() => import("@/pages/message"))


const routers = [
    {
        path: "/",
        exact: true, //严格模式
        render: () => <Redirect to="/home" />,
    },
    {
        path:"/home",
        component:ZFhome,
        exact: true,
    },
    {
        path:"/about",
        component:ZFabout,
        exact: true,
    },
    {
        path:"/archive",
        component:ZFarchive,
        exact: true,
    },
    {
        path:"/dynamic",
        component:ZFdynamic,
        exact: true,
    },
    {
        path:"/friendLinks",
        component:ZFfriendLinks,
        exact: true,
    },
    {
        path:"/hodgepodge",
        component:ZFhodgepodge,
        exact: true,
    },
    {
        path:"/message",
        component:ZFmessage,
        exact: true,
    }
]

export default routers;