import React, { memo } from 'react'
import { Image } from 'antd';

import { HomeRightStyle } from './style'

import Bg1 from "@/asstes/image/backiee-202851.jpg";

export default memo(function HomeRight() { 

    const content = [1,2,3,4,5,6,8,5,8,8,8,8,8,8,8,8,8,8,8,8,]

    return (
        <HomeRightStyle>
            {
                content.map((item,index) => {
                    return (
                        <div className="card-container card-panel" key={index}>
                            <div>
                                <Image preview={false} className='banner-img'  src={Bg1} />
                                <div className="box">
                                    <h2>
                                        <a href="/" className="title" >GIF图片裁剪出指定大小的GIF图片</a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </HomeRightStyle> 
    )
})
