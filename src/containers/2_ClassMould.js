import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'                           // 用来连接redux中reducer中全局数据的

import FunMould from '../components/1_funMould'                 // 引用的ui组件

import updateConfig from '../actions/config'                    // 需要用的全局action方法

export class Module extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props) {
    super(props)
    this.state = {
      username: '张三'
    }
  }
  handeleClick(index){
    console.log(1111, index);                                   // 传值
    this.props.updateConfig({theme: 'red'})                     // 掉用redux 中的actions
  }
  render() {
    return (
      <div>
         <FunMould username={this.state.username} userphone= {this.props.userphone} handeleClick={(index)=>{this.handeleClick(index)}}></FunMould>
      </div>
    )
  }
}
const mapStateToProps = (state, owProps) => ({                  // owProps 是这个容器组件接收的props值，因为在处理时可能要用到他
  userphone: owProps.phone ? owProps.phone : state.user.phone   // state 是全局reducers中定义的 包括合并的 user、config
})
const mapDispatchToProps = (dispatch, owProps) => ({            // 引用全局actions中定义方法
  updateConfig: (config)=>dispatch(updateConfig(config))
})
export default connect(mapStateToProps, mapDispatchToProps)(Module)
