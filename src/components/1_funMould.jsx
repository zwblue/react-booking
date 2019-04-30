import React from 'react';
import PropTypes from 'prop-types'

import styled from 'styled-components'
import color from '../utils/color'
import config from '../utils/config'



function Module() {
  const ModuleBox = styled.div `
    /* height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    align-items: center;
    background: ${color.$bg}; */
    /* color: ${color.baseColor} */
  `
  return (
    <ModuleBox>
    </ModuleBox>
  );
}
Module.propTypes = {
  menuData: PropTypes.array.isRequired,
}
export default Module;
