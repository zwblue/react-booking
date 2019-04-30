import React from 'react';
import PropTypes from 'prop-types'

import styled from 'styled-components'
import color from '../utils/color'



function Module({username, userphone, handeleClick}) {
  const ModuleBox = styled.div `
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    align-items: center;
    background: ${color.$base_black_bg};
  `
  return (
    <ModuleBox onclick={handeleClick()}>
        <div>{username}</div>
        <div>{userphone}</div>
    </ModuleBox>
  );
}
Module.propTypes = {
  menuData: PropTypes.array.isRequired,
}
export default Module;
