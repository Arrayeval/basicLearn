/*
添加消息订阅器 
创建一个可以容纳订阅者的消息订阅器Dep,负责收集订阅者，然后再属性变化的时候执行对应订阅者的更新函数
*/
function defineReactive (data, key, val) {
  observe(val);
  var dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      if (Dep.target) { // 是否添加订阅者
        dep.addSub(Dep.target);
      }
      return val
    },
    set: function(newVal) {
      if(val === newVal) {
        reutrn;
      }
      val = newVal;
      dep.notify(); // 数据变化通知订阅者
    }
  })
}
function observe(data) {
  if (!data || typeof data !== 'object') {
      return;
  }
  Object.keys(data).forEach(function(key) {
      defineReactive(data, key, data[key]);
  });
};

function Dep () {
  this.subs = [];
}
Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub)
  },
  notify: function () {
    this.subs.forEach(sub => {
      sub.update() // 执行每个订阅器的视图更新方法
    });
  }
}

Dep.target = null ;