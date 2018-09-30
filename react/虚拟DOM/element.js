function Element (tagName, props, children) {
  this.tagName = tagName
  this.props = props
  this.children = children
}

function createEle (tagName, props, children) {
  return new Element(tagName, props, children)
}

Element.prototype.render = function () {
  var el = document.createElement(this.tagName)
  var props = this.props
  for (var propName in props) {// 设置节点的dom
    var propValue = props[propName]
    el.setAttribute(propName, propValue)
  }
  var children = this.children || []
  children.forEach(function (child) {
    var childEl = (child instanceof Element)
      ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
      : document.createTextNode(child) // 如果字符串，只构建文本节点
    el.appendChild(childEl)
  })
  console.log("el", el)
  return el
}