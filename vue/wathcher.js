/*添加一个订阅者 */ 
function Watcher (vm, exp, fun) { // vm: this, exp: 属性名  fun: 执行函数
  this.vm = vm; 
  this.exp = exp;
  this.fun = fun;
  this.val = this.get(); // 将自己添加到订阅器
}

Watcher.prototype = {
  update: function () {
    this.run();
  },
  run: function () {
    var value = this.vm.data[this.exp];
    var oldVal = this.value;
    if(value !== oldVal) {
      this.value = value;
      this.fun.call(this.vm, value, oldVal);
    }
  },
  get: function () {
    Dep.target = this;
    var value = this.vm.data[this.exp];
    Dep.target = null;
    return value;
  }
}