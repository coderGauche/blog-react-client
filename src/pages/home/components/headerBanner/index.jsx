import React, { memo,useCallback,useState } from 'react'
import { Image, Carousel } from 'antd';
import {
    SendOutlined
} from '@ant-design/icons';

import { HeaderBanner } from './style'
import Bg1 from "@/asstes/image/backiee-202851.jpg";
import Bg2 from "@/asstes/image/backiee-121981.jpg";
import Bg3 from "@/asstes/image/backiee-126022.jpg";

export default memo(function ZFheaderBanner() {
    const tags = ['React', 'Webpack', 'JavaScript', 'Node', 'MongoDB']
    const topBanners = [
        {
            title: '从0搭建一套属于自己的博客系统',
            img: Bg1
        },
        {
            title: '从0搭建一套属于自己的博客系统',
            img: Bg2
        },
        {
            title: '从0搭建一套属于自己的博客系统',
            img: Bg3
        }
    ]
     //state
     const [currentIndex,setcurrentIndex] =useState(0)
         //防止随随便便刷新
    const bannerChange = useCallback((from ,to)=>{
          setcurrentIndex(to)
    },[])
    const bgImage=topBanners[currentIndex] && (topBanners[currentIndex].img)
    return (
        <HeaderBanner bgImage={bgImage}>
            <Carousel style={{ width: '100%' }} beforeChange={bannerChange}>
                {
                    topBanners.map((item, index) => {
                        return (
                            <div key={index} style={{padding:'65px'}}>
                                <div className="banner-slide">
                                    <div>
                                        <div className="banner-slide__title">{item.title}</div>
                                        <div className="banner-slide__tags flex-center">
                                            {
                                                tags.map((item, index) => {
                                                    return <a className="banner-slide__tag" href="/" key={index}>{item}</a>
                                                })
                                            }
                                        </div>
                                        <div className="banner-slide__read-more flex-around alignment">
                                            <SendOutlined />
                                            <span>阅读全文</span>
                                        </div>
                                    </div>
                                    <Image  preview={false} className='banner-img' width={220} height={220} src={item.img}
                                    />
                                </div>
                                <div className="bubble-cover">
                                    <div className="bubble-cover__bg">
                                        <div className="bubble-cover__bg-img"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </HeaderBanner>
    )
})
