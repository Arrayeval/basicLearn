/* Observer是一个数据监听器，其实现核心方法就是前文所说的Object.defineProperty( )。如果要对所有属性都进行监听的话，那么可以通过递归方法遍历所有属性值，并对其进行Object.defineProperty( )处理 */
function defineReactive(data, key, val) {
  observe(val); // 递归遍历所有子属性
  Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function() {
          return val;
      },
      set: function(newVal) {
          val = newVal;
          console.log('属性' + key + '已经被监听了，现在值为：“' + newVal.toString() + '”');
      }
  });
}

function observe(data) {
  if (!data || typeof data !== 'object') {
      return;
  }
  Object.keys(data).forEach(function(key) {
      defineReactive(data, key, data[key]);
  });
};

var _testData = {
  team_one: {
    name: "摩登兄弟",
    num: 4,
    partner: {
      name: '刘宇宁',
      age: 24
    }
  },
  team_two: {
    name: "飞轮海",
    num: 4,
    partner: {
      name: '吴尊',
      num: 5
    }
  }
}
observe(_testData);
/*
 改变对象的默认数据进行测试
 */

