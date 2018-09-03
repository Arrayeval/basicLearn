import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  constructor () {
    super()
    this.state = {
      themeColor: ''
    }
  }
  componentWillMount () {
    const {store} = this.context
    this._updateThemeColor()
    store.subscriber(() => { //  向store的listeners中存储待执行方法，每一次触发dispatch，都会执行
      this._updateThemeColor()
    })
  }
  _updateThemeColor () {
    const {store} = this.context
    const state = store.getState()
    this.setState({
      themeColor: state.themeColor
    })
  }
  render () {
    return (
      <h1 style={{color: this.state.themeColor}}>react 知识</h1>
    )
  }
}
export default Header