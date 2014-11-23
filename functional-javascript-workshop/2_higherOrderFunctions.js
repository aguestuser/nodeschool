var repeat = function(operation, num){
  if (num <= 0){ return }
  operation()
  return repeat(operation, --num)
}
module.exports = repeat