function loadUsers(userIds, load, done) {
  var users = []
    , count = 0
  
  userIds.forEach(function(id, i){
    load(id, function(user){
      users[i] = user
      if (++count === userIds.length) return done(users) 
    })
  })
}

module.exports = loadUsers