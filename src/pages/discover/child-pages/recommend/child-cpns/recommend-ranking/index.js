import React, { memo, useEffect } from 'react'

import WYThemeHeaderRCM from '@/components/theme-header-rcm'
import WYTopRanking from '@/components/top-ranking'

import { RECOMMEND_RANKING } from '@/common/contants'
import { getTopListAction } from '../../store/actionCreators'

import { RankingWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default memo(function WYRecommendRanking(props) {
  const { upRanking,newRanking,originRanking } = useSelector(state => ({
    upRanking:state.getIn(["recommend","upRanking"]),
    newRanking:state.getIn(["recommend","newRanking"]),
    originRanking:state.getIn(["recommend","originRanking"]),
  }),shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(RECOMMEND_RANKING[0]));
    dispatch(getTopListAction(RECOMMEND_RANKING[1]));
    dispatch(getTopListAction(RECOMMEND_RANKING[2]));
  },[dispatch])

  return (
    <RankingWrapper>
      <WYThemeHeaderRCM title="榜单"/>
      <div className='tops'>
        <WYTopRanking info={upRanking}/>
        <WYTopRanking info={newRanking}/>
        <WYTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
