import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {withRouter} from 'react-router-dom'

import Sider from '../components/Sider'


export class SiderCase extends Component {
  static propTypes = {
    // userInformation: PropTypes.object
  }

  
  constructor(props) {
    super(props)
  
    this.state = {
      activeIndex: 2,
      siderMenuData: [
        { path: '', name: '收入' },
        { path: '/pay', name: '支出' },
        { path: '/set', name: '设置' },
      ],
    }
  }
  switchMenu(index) {
    const {activeIndex, siderMenuData} = this.state
    if(activeIndex !== index) {
      this.setState({
        activeIndex: index
      },()=>{
        console.log(33333)
      })
      this.props.history.replace(siderMenuData[index].path)
    }

  }

  render() {
    const {activeIndex, siderMenuData} = this.state
    return (
      <Sider activeIndex={activeIndex} siderMenuData={siderMenuData} onSwitchMenu={(index)=>{this.switchMenu(index)}}></Sider>  
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SiderCase))
