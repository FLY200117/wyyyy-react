import React, { memo } from 'react'

import { getSizeImage } from "@/utils/format-utils"

import { AlbumWrapper } from './style'

export default memo(function WYAlbumCover(props) {
  const { info,size = 130,width = 153,bgp = "-845px" } = props


  return (
    <AlbumWrapper size={size} width={width} bgp = {bgp}>
        <div className='album-image'>
            <img src={getSizeImage(info.coverUrl,size)} alt=""/>
            <a href='/todo' className='cover image_cover'>{info.albumName}</a>
        </div>
        <div className='album-info'>
            <div className='name text-nowrap'>{info.albumName}</div>
            <div className='artist text-nowrap'>{info.artistName}</div>
        </div>
    </AlbumWrapper>
  )
})
