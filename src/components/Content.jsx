import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

import color from '../utils/color'
import config from '../utils/config'

function Content() {
  const Content = styled.div `
    flex:1;
    flex-direction: column;
    padding: 0 20px;
    border-radius: 5px;
    margin-left: ${config.DIVIDER_HEIGHT}px;
    background: ${color.$base_white_bg};
    /* color: ${color.baseColor} */
  `
  return (
    <Content>
    </Content>
  );
}
Content.propTypes = {
  // menuData: PropTypes.array.isRequired,
}
export default Content;
