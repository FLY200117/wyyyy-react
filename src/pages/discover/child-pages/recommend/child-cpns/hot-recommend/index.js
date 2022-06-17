import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import WYThemeHeaderRCM from '@/components/theme-header-rcm'
import WYSongsCover from '@/components/songs-cover'

import {
    HotRecommendWrapper
} from './style'

import { getHotRecommendsAction } from '../../store/actionCreators'

import { HOT_RECOMMEND_LIMIT } from '@/common/contants'

export default memo(function WYHotRecommend() {

    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend","hotRecommends"])
    }),shallowEqual)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
    },[dispatch])

  return (
    <HotRecommendWrapper>
        <WYThemeHeaderRCM title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子"]}/>
        <div className='recommend-list'>
            {
                hotRecommends.map((item,index) => {
                    return (
                        <WYSongsCover key={item.id} info={item} />
                    )
                })
            }
        </div>
    </HotRecommendWrapper>
  )
})
