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

SelfVue.prototype = {
  proxyKeys: function (key) {
      var self = this;
      Object.defineProperty(this, key, {
          enumerable: false,
          configurable: true,
          get: function proxyGetter() {
              return self.data[key];
          },
          set: function proxySetter(newVal) {
              self.data[key] = newVal;
          }
      });
  }
}