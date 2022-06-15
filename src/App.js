
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'


import routes from './router';
import store from './store';

import WYAppHeader from '@/components/header';
import WYAppFooter from '@/components/footer';
import { BrowserRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <Provider store={store}> 
        <BrowserRouter>
          <WYAppHeader/>
            {renderRoutes(routes)}
          <WYAppFooter/>
      </BrowserRouter> 
    </Provider>   
  )
})