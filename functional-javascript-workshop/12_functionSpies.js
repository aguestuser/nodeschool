function Spy(target, method) {
  var that = { count: 0 }
    , old_method = target[method]

  target[method] = function(){
    that.count++
    return old_method.apply(target, arguments)
  }
  
  return that
}

module.exports = Spy