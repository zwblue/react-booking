import React from 'react';
import PropTypes from 'prop-types'

import styled from 'styled-components'
import color from '../../utils/color'



function Income({username, userphone, handeleClick}) {
  const IncomeBox = styled.div `
  `
  return (
    <IncomeBox>
       收入
    </IncomeBox>
  );
}
Income.propTypes = {
  // menuData: PropTypes.array.isRequired,
}
export default Income;
