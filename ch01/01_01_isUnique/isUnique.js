var allUniqueChars = function(string){

  for (var i = 0; i < string.length; i++){
    for (var j = i + 1; j < string.length; j++){
      if (string[i] === string[j]){
        return false;
      }
    }
    return true
  }
}
