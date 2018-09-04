 export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
   class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }
    constructor () {
      super()
      this.state = {
        allProps: {}
      }
    }
    componentWillMount () {
      const {store} = this.context
      this._updateProps()
      store.subscriber(() => { // 向store的listeners中存储待执行方法，每一次触发dispatch，都会执行
        this._updateProps()
      })
    }
    _updateProps () {
      const {store} = this.context
      const stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props):{}
      const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props):{}
      this.setState({
        allProps: {
          ...stateProps,
          ...this.props
        }
      })
    }
    render () {
     return <WrappedComponent {...this.state.allProps}/> 
    }
   }
   return Connect
 }