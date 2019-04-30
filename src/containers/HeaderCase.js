import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from '../components/Header'

export class HeaderCase extends Component {
  static propTypes = {
    userInformation: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
       isLogin: false
    }
  }
  render() {
    const {isLogin} = this.state
    const {name} = this.props.userInformation
    console.log(name)
    return (
      <Header userName={name} isLogin={isLogin}></Header>  
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInformation: state.userInformation
  }
}


export default connect(mapStateToProps)(HeaderCase)