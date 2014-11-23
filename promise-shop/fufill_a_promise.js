var q = require('q')
  , defer = q.defer()

defer.promise.then(function(){
  
  setTimeout(function(){console.log()}, 3000)
})