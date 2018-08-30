function selfVue (data, el, exp) {
  this.data = data;

  // 优化
  Object.keys(data).forEach((key) => {
    this.proxyKeys(key)
  })

  observe(data);
  el.innerHTML = this.data[exp];
  new Watcher(this, exp, function(val){
    el.innerHTML = val
  })
  console.log(this)
  return this;
}

selfVue.prototype = {
  proxyKeys: function (key) {
    let selft = this;
    
  }
}