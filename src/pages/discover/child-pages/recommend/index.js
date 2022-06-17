import React, { memo } from 'react'

import  WYTopBanner  from './child-cpns/top-banner'
import WYHotRecommend from './child-cpns/hot-recommend'
import WYNewAlbum from './child-cpns/new-album'
import WYRecommendRanking from './child-cpns/recommend-ranking'
import WYUserLogin from './child-cpns/user-login'
import WYHotAnchor from './child-cpns/hot-anchor'
import WYSettleSinger from './child-cpns/settle-singer'

import { 
  Content,
  RecommendWrapper,
  RecommendLeft,
  RecommendRight
 } from './style'
 
// import { getTopBannerAction } from './store/actionCreators'

// import { useDispatch, useSelector,shallowEqual } from 'react-redux'

// 使用connect来关联props和state
// import { connect } from 'react-redux'

function WYRecommend(props) {

  // useSelector性能会比connect差，connect是根据返回对象进行浅层比较来决定组件是否重新渲染
  // 而useSelector则是使用==来进行比较，但是useSelector中的topBanners是由函数本身的调用产生的
  // 而每次调用函数返回的对象通过==来比较都不相等，所以useSelector性能相比connect会差

  // shallowEqual能让useSelector进行浅层比较，这样就能优化useSelector性能
  // const { topBanners } = useSelector(state => ({
  //   // topBanners: state.get("recommend").get("topBanners")
  //   // getIn是上述代码的语法糖
  //   topBanners: state.getIn(["recommend","topBanners"])
  // }),shallowEqual)

  // // 组件和redux关联：获取数据和进行操作
  // const dispatch = useDispatch();

  // // 发送网络请求
  // useEffect(() => {
  //   dispatch(getTopBannerAction());
  // },[dispatch])


  return (
    <RecommendWrapper>
      <WYTopBanner/>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <WYHotRecommend/>
          <WYNewAlbum/>
          <WYRecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <WYUserLogin/>
          <WYSettleSinger/>
          <WYHotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}


export default memo(WYRecommend)



// function WYRecommend(props) {
//   const { getBanners,topBanners } = props

//   useEffect(() => {
//     getBanners()
//   },[getBanners])


//   return (
//     <div>
//       <h2>recommend:{topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })


// export default connect(mapStateToProps,mapDispatchToProps)(memo(WYRecommend))
