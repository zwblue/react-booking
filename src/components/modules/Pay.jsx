import React from 'react';
import PropTypes from 'prop-types'

import styled from 'styled-components'
import color from '../../utils/color'



function Pay({username, userphone, handeleClick}) {
  const PayBox = styled.div `
  `
  return (
    <PayBox>
       支出
    </PayBox>
  );
}
Pay.propTypes = {
  // menuData: PropTypes.array.isRequired,
}
export default Pay;
