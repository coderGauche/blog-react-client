import React, { memo } from 'react'
import { Layout } from 'antd'
import {FooterStyle} from './style'
const { Footer } = Layout;

export default memo(function Footers() {
  return (
    <FooterStyle>
      <Footer className="Footer">
        <div>大神到访数：26146</div>
        <div className="copyright">版权所有 © 2021 •̀.̫•́✧ | Wintermelon All Rights Reserved</div>
        <div className="copyright">京ICP备17004318号-1</div>
      </Footer>
    </FooterStyle>
  );
});
