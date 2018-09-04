import React, {Component} from 'react'
import ProTypes from 'prop-types'
class ThemeSwitch extends Component {
  static contextTypes =　{
    store: ProTypes.object
  }
  constructor () {
    super()
    this.state = {themeColor: ''}
  }
  componentWillMount () {
    const {store} = this.context
    this._updateThemeColor()
    store.subscriber(() => { // 向store的listeners中存储待执行方法，每一次触发dispatch，都会执行
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
  // changeColor (color) {
  //   const {store} = this.context
  //   store.dispatch({
  //     type: 'CHANGE_COLOR',
  //     themeColor: color
  //   })
  //   this._updateThemeColor()
  // }
  changeColor (color) {
    const {store} = this.context
    store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }
  render () {
    return (
      <div>
        <button style={{color: this.state.themeColor}} onClick={this.changeColor.bind(this, 'red')}>Red</button>
        <button style={{color: this.state.themeColor}} onClick={this.changeColor.bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}
export default ThemeSwitch