import React, { memo, useState, useEffect } from 'react'

import { HomeStyle } from './style'
import HeaderBanner from './components/headerBanner'
import Tags from './components/tags'
import HomeRight from './components/homeRight/index'

export default memo(function ZFhome() {
    const [currentTime, setCurrentTime] = useState({})
    const [tagScrollTop,setTagScrollTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })

    const handleScroll = (event) => {
        //滚动条高度
        // let clientHeight = document.documentElement.clientHeight; //可视区域高度
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        // let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
        if(scrollTop>400){
            setTagScrollTop(true)
        }else{
            setTagScrollTop(false)
        }
        // let res = scrollHeight - scrollTop - clientHeight;
    }

    return (
        <HomeStyle>
            <HeaderBanner></HeaderBanner>
            <div className="flex">
                <Tags tagItem={setCurrentTime} tagScrollTop={tagScrollTop}></Tags>
                <HomeRight></HomeRight>
            </div>
        </HomeStyle>
    )
})
