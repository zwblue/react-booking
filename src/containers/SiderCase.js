import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Sider from '../components/Sider'


export class SiderCase extends Component {
  static propTypes = {
    // userInformation: PropTypes.object
  }

  
  constructor(props) {
    super(props)
  
    this.state = {
      activeIndex: 0,
      siderMenuData: [
        '收入', '支出', '设置'
      ],
    }
  }
  
  switchMenu(index) {
    const {activeIndex} = this.state
    if(activeIndex !== index) {
      this.setState({
        activeIndex: index
      })
    }
  }

  render() {
    const {activeIndex, siderMenuData} = this.state
    // const {userInformation} = this.props
    // console.log(userInformation)
    return (
      <Sider activeIndex={activeIndex} siderMenuData={siderMenuData} onSwitchMenu={(index)=>{this.switchMenu(index)}}></Sider>  
    )
  }
}

const mapStateToProps = (state) => ({
  // userInformation: state.userInformation
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderCase)
