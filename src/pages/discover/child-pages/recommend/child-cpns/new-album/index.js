import React, { memo, useEffect, useRef } from 'react'

import WYThemeHeaderRCM from '@/components/theme-header-rcm'
import WYAlbumCover from '@/components/album-cover'

import { getNewAlbumsAction } from '../../store/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'

import { AlbumWrapper } from './style'

export default memo(function WYNewAlbum() {

  const pageRef = useRef()

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend","newAlbums"])
  }),shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  },[dispatch])

  return (
    <AlbumWrapper>
      <WYThemeHeaderRCM title="新碟上架"/>
      <div className='content'>
        <button className='arrow arrow-left sprite_02' onClick={e => pageRef.current.prev()}></button>
        <div className='album'>
          <Carousel dots={false} ref={pageRef}>
            {
              [0,1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item*5,(item + 1)*5).map(iten => {
                        return <WYAlbumCover key={iten.albumId}
                                             info={iten}
                                             size={100}
                                             width={118}
                                             bgp="-570px"/>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
