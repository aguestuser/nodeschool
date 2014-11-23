module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(memo, item, index, arr){
    return memo.concat(fn(item, index, arr))
  }, [])
}

