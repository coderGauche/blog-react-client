import React, { memo, useState, useEffect, useMemo } from 'react'
import SvgIcon from "@/components/svgIcon";

import { TagsStyle } from './style'
// import svg from '@/asstes/font/svg'
export default memo(function Tags(props) {
    // 数据
    const tagList = useMemo(() => {
        const lits = [
            {
                name: 'JavaScript',
                icon: 'javascript',
                iconActive: 'javascript-l'
            },
            {
                name: 'hot',
                icon: 'hot',
                iconActive: 'hot-l'
            },
            {
                name: 'mysql',
                icon: 'mysql',
                iconActive: 'mysql-l'
            },
            {
                name: 'node',
                icon: 'node',
                iconActive: 'node-l'
            },
            {
                name: 'react',
                icon: 'react',
                iconActive: 'react-l'
            },
            {
                name: 'vue',
                icon: 'vue',
                iconActive: 'vue-l'
            },
            {
                name: 'webpack',
                icon: 'webpack',
                iconActive: 'webpack-l'
            },
            {
                name: 'webpack1',
                icon: 'webpack1',
                iconActive: 'webpack-l' 
            }
        ]
        return lits
    }, [])
    const { tagItem,tagScrollTop } = props

    // props and state 
    const [tagCurrent, setTagCurrent] = useState(0)

    // redux hook1
    useEffect(() => {
        const listItem = tagList[0]
        tagItem(listItem)
    }, [tagItem, tagList])
    
    // other hooks

    // other handle

    // handle function
    // 点击切换icon的变色
    const tagItemChange = (row, index) => {
        setTagCurrent(index)
        tagItem(row)
    }

    return (
        <TagsStyle >
            <div className={[tagScrollTop?"fixed":""]}>
                {
                    tagList.map((item, index) => {
                        return (
                            <div
                             className={["flex","alignment","tags-syle","cp", tagCurrent === index?"item-style":''].join(' ')}
                             onClick={e => tagItemChange(item, index)} 
                             key={item.icon}>

                                <SvgIcon iconClass={tagCurrent === index ? item.iconActive : item.icon} />
                                <div className={[tagCurrent === index ? "icon-name-active":"icon-name"].join(' ')}>{item.name}</div>

                            </div>
                        )
                    })
                }
            </div>
        </TagsStyle>
    )
})
