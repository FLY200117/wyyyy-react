import * as actionTypes from './constants'

import { RECOMMEND_RANKING } from '@/common/contants'

import { 
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getPlaylist } from '@/network/recommend'

const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendsAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.products
})

const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking:  res.playlist
})

const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking:  res.playlist
})

const changeOriginRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking:  res.playlist
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res))
            console.log(res)
        })
    }
}

export const getHotRecommendsAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendsAction(res))
            console.log(res)
        })
    }
}

export const getNewAlbumsAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            dispatch(changeNewAlbumAction(res))
            console.log(res)
        })
    }
}

export const getTopListAction = (id) => {
    return dispatch => {
        getPlaylist(id).then(res => {
            switch (id) {
                case RECOMMEND_RANKING[0]:
                    dispatch(changeUpRankingAction(res));
                    break
                case RECOMMEND_RANKING[1]:
                    dispatch(changeNewRankingAction(res));
                    break
                case RECOMMEND_RANKING[2]:
                    dispatch(changeOriginRankingAction(res));
                    break
                default:    
            }
        })
    }
}