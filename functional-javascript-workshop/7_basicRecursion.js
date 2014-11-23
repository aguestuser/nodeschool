function reduce(arr, fn, init) {
  return (function reduceOne( index, val ){
    if ( index >= arr.length ){ return val }
    return reduceOne( index + 1, fn ( val, arr[index], index, arr ) )
  })( 0, init )
}
module.exports = reduce

// function reduce(arr, fn, init) {
//   if (!arr.length){ return init } 
//   else {
//     var head = fn( init, arr[0], 0, arr )
//       , tail = arr.slice(1)
//     return reduce( tail, fn, head )
//   }
// }
// module.exports = reduce