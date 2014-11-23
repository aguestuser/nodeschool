function getDependencies(tree) {
  // input: JSON Obj
  // output: Array of Strings
  var dependencies = tree.dependencies || [] // base case

  return Object.keys(dependencies) // get keys
    .map(formatKey.bind(dependencies)) // find first level deps
    .concat(Object.keys(dependencies).map(getNestedDependencies.bind(dependencies)) // find next level dependencies (will recurse)
    .reduce(function (arrNow, item){ return arrNow.concat(item) }, [])) // flatten array 
    .filter(function (item, i, arr) { return arr.indexOf(item) == i }) // dedupe array
    .sort()
}

function formatKey(key){
  //input: Str
  //output: Str
  return key + '@' + this[key].version
}

function getNestedDependencies(key){
  //input: Str
  //output: Arr of Strings
  return getDependencies(this[key])
}

module.exports = getDependencies