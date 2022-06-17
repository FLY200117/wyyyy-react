import React, { memo,useCallback,useEffect,useRef, useState } from 'react'

import { useDispatch, useSelector,shallowEqual } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import {
    BannerWrapper,
    BannerControl,
    BannerLeft,
    BannerRight
} from './style'

export default memo(function WYTopBanner() {
    const [currentIndex,setCurrentIndex] = useState(0)

    const { topBanners } = useSelector(state => ({
        // topBanners: state.get("recommend").get("topBanners")
        // getIn是上述代码的语法糖
        topBanners: state.getIn(["recommend","topBanners"])
      }),shallowEqual)
    
      // 组件和redux关联：获取数据和进行操作
      const dispatch = useDispatch();

      // 其他Hooks
      const bannerRef = useRef();
    
      // 发送网络请求
      useEffect(() => {
        dispatch(getTopBannerAction());
      },[dispatch])

      const beforeChange = useCallback((from,to) => {
        setCurrentIndex(to)
      },[]);

      const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+ "?imageView&blur=40x20") 

  return (
    <BannerWrapper bgImage={bgImage}>
        <div className='banner wrap-v2'>
            <BannerLeft>
              <Carousel effect='fade' autoplay ref={bannerRef} beforeChange={beforeChange}>
                {
                  topBanners.map((item,index) => {
                    return (
                      <div key={index} className="banner-item">
                        <img src={item.imageUrl} alt={item.typeTitle} className="image"/>
                      </div>
                    )
                  })
                }
              </Carousel>
            </BannerLeft>
            <BannerRight></BannerRight>
            <BannerControl>
              <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
              <button className='btn right' onClick={e => bannerRef.current.next()}></button>
            </BannerControl>
        </div>
    </BannerWrapper>
  )
})
