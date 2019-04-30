import React from 'react';
import { Route, Switch } from "react-router-dom";

import styled from 'styled-components'
import config from './utils/config'
import color from './utils/color'

import HeaderCase from './containers/HeaderCase.js'
import SiderCase from './containers/SiderCase'
import IncomeCase from './containers/modules/IncomeCase'
import PayCase from './containers/modules/PayCase'

import './styles/App.css';
import './styles/common.css';

function App() {
  const Section = styled.section `
    display: flex;
    position: fixed;
    width: 80%;
    left: 10%;
    border-radius: 5px;
    right: 10%;
    margin: 0 auto;
    top: ${config.HEADER_HEIGHT+config.DIVIDER_HEIGHT}px;
    bottom: ${config.DIVIDER_HEIGHT}px;
  `
   const Content = styled.div `
    flex:1;
    flex-direction: column;
    padding: 20px;
    border-radius: 5px;
    margin-left: ${config.DIVIDER_HEIGHT}px;
    background: ${color.$base_white_bg};
   `
  return (
    <div className="App">
      {/* 头部 */}
      <HeaderCase></HeaderCase>
      <Section>
        {/* 侧边栏 */}
        <SiderCase></SiderCase>
        {/* 主体内容区域 */}
        <Content>
          {/* 内容模块组件 */}
          <Switch>
            <Route path='/pay' component={PayCase}></Route>
            <Route path='/' component={IncomeCase}></Route>
          </Switch>
        </Content>
      </Section>
    </div>
  );
}

export default App;
