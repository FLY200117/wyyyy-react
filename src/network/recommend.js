import request from './request';

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbums(limit) {
  return request({
    url: "/album/list",
    params: {
      limit
    }
  })
}

export function getTopList() {
  return request({
    url: "/toplist"
  })
}

export function getPlaylist(id) {
  return request({
    url: "/playlist/detail",
    params:{
      id
    }
  })
}
