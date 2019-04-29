import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Sider from '../components/Sider'


export class SiderCase extends Component {
  static propTypes = {
    prop: PropTypes
  }

  
  constructor(props) {
    super(props)
  
    this.state = {
      activeIndex: -1,
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
    return (
      <Sider activeIndex={activeIndex} siderMenuData={siderMenuData} onSwitchMenu={(index)=>{this.switchMenu(index)}}></Sider>  
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderCase)



// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(updateUserInformation(ownProps.userInformation))
//     }
//   }
// }
