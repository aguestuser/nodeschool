function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(arg){
    return Object.prototype.hasOwnProperty.call(arg, 'quack')
  }).length
}

// function duckCount() {
//   var args = Array.prototype.slice.call(arguments)
//   return args.reduce(function(count, arg){
//     if ( Object.prototype.hasOwnProperty.call(arg, 'quack') ){ 
//       count++
//     }
//     return count
//   }, 0)
// }

module.exports = duckCount