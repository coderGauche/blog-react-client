import React, { memo,Suspense} from 'react'
// import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from "react-router-dom";
import { Layout } from 'antd'
//引入样式
import {AppStyle} from './style'

//引入组件
import Header from '@/components/header'
import Footer from '@/components/footer'

import routers from "./router";
const {  Content } = Layout;

export default memo(function App() {
  return (
    <AppStyle>
      <HashRouter>
        <Layout>
          <Header />
          <Content 
          className="site-layout"
            style={{ padding: "30px 30px", marginTop: 64,backgroundColor:'#F0F2F7' }}
          >
             <Suspense fallback={<div>page loading</div>}>
               {renderRoutes(routers)}
             </Suspense> 
          </Content>
          <Footer />
        </Layout>
      </HashRouter>
    </AppStyle>
  );
});
