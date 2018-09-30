var recipes = {};

updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({}, recipes, {[key] : value});
}

