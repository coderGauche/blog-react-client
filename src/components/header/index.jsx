import React, { memo, useState,useMemo } from 'react'
import { Layout, Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons';
import { NavLink,useLocation } from "react-router-dom";

import logo from '@/asstes/image/465f1c74070d4a10ba8cfc74a55747ef.PNG'
import { HeaderStyle } from './style';
import { headerLinks } from '@/common/local-data'
const { Header } = Layout;

export default memo(function Headers() {
    // props and state 
    const location = useLocation();

    const getCurrentChange = useMemo(() =>{
        var pathname = ''
        if(location.pathname === '/'){
            pathname = '/home'
        }else{
            pathname =location.pathname
        }
        let obj = headerLinks.find(o => o.link === pathname);
        // console.log(pathname);
        return obj.title 
    }, [location])

    const [current, setCurrent] = useState(getCurrentChange)

    // redux hook1

    // other hooks

    // handle function
    const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key)
    }
    return (
        <HeaderStyle>
            <Header className="paddingrl20 flex-between header">
                <img className="logo" src={logo} alt="" />
                <Menu
                    mode="horizontal"
                    onClick={handleClick}
                    selectedKeys={[current]}
                >
                    {
                        headerLinks.map((item, index) => {
                            return (
                                <Menu.Item key={item.title} icon={<MailOutlined />} >
                                    <NavLink to={item.link} exact>
                                        {item.title}
                                    </NavLink>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Header>
        </HeaderStyle>
    )
})
