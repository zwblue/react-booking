import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const logoImg = require('../images/account_logo.png')

function App(data) {
  const Header = styled.header `
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    align-items: center;
    background: #f3f5f7;
  `
  const LArea = styled.div `
    display: flex;
    height: 60px;
    align-items: center;
    span{
      margin-left: 6px;
    }
    .logo{
      background: url(${logoImg}) no-repeat center;
      background-size: 100% 100%;
      height: 32px;
      width: 32px;
    }
  `
  const RArea = styled.div `
    display: flex;
    height: 60px;
    align-items: center;
    .menu-item{
      margin-left: 20px;
      display: flex;
      align-items: center;
      &:hover {
        color: #2e90e5;
      }
      .iconfont{
        margin-right: 4px;
      }
    }
  `
  return (
    <Header>
      <LArea>
        <div className='logo'></div>
        <span>私人小金库</span>
      </LArea>
      <RArea>
        <div className='menu-item'>
          <span className='iconfont icon-1USER'></span> 张三
        </div>
        <div className='menu-item'>
          <span className='iconfont icon-log-out'></span> 退出
        </div>  
      </RArea>
    </Header>
  );
}
App.propTypes = {
  // userInformation: PropTypes.array.isRequired,
}
export default App;
