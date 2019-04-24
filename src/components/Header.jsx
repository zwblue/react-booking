import React from 'react';
import PropTypes from 'prop-types'

function App(data) {
  console.log(data)
  return (
    <header className="App-header">
      Header
    </header>
  );
}
App.propTypes = {
  // userInformation: PropTypes.array.isRequired,
}
export default App;
