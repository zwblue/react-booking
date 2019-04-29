import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import color from '../utils/common'

function App() {
  const Header = styled.header `
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    align-items: center;
    background: ${color.$bg};
    /* color: ${color.baseColor} */
  `
  return (
    <header className="App-header">
    </header>
  );
}
App.propTypes = {
  menuData: PropTypes.array.isRequired,
}
export default App;
