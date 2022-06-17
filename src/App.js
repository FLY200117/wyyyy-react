
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom';

import routes from './router';
import store from './store';

import WYAppHeader from '@/components/header';
import WYAppFooter from '@/components/footer';

import WYAppPlayerBar from './pages/player/app-play-bar'

export default memo(function App() {
  return (
    <Provider store={store}> 
        <BrowserRouter>
          <WYAppHeader/>
            {renderRoutes(routes)}
          <WYAppFooter/>
          <WYAppPlayerBar/>
      </BrowserRouter> 
    </Provider>   
  )
})