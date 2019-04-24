// react 模板
import React from 'react';
import PropTypes from 'prop-types'

function App() {
  return (
    <header className="App-header">
    </header>
  );
}
App.propTypes = {
  menuData: PropTypes.array.isRequired,
}
export default App;
