var chocolateBars = [
  'snicker',
  'hundred grand',
  'kitkat',
  'skittles',
  ]
<<<<<<< HEAD

  function addElementToBeginningOfArray(array, element){
    return array=[element,...array];
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
     array.unshift(element)
     return array
  }
  
  function addElementToEndOfArray(array, element){
    return array=[...array,element];
  }
  function destructivelyAddElementToEndOfArray(array, element){
     array.push(element)
     return array
  }
  
  function accessElementInArray(array, index){
     return array[index]
  }
  
 function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return array
 }
 
 function removeElementFromBeginningOfArray(array){
   array=array.slice(1)
   return array
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
    array.pop()
     return array
 }
 
 function removeElementFromEndOfArray(array){
   array=array.slice(0,2)
   return array
 }
=======
  
  function addElementtoBeginningOfArry(){
    var myArry= [
      'mom',
      'dad',
      'sis',
      'bro']
      myArry=["me",...myArry]
  }
  
  function destructivelyAddElementToBeginningOfArry(){
    var myArry= [
      'mom',
      'dad',
      'sis',
      'bro']
    myArry.unshift ('me')
  }
  
  function addElementtoEndOfArry() {
     var myArry= [
      'mom',
      'dad',
      'sis',
      'bro']
      myArry=[...myArry,"me"]
  }
  function destructivelyAddElementToEndOfArry () {
        var myArry= [
      'mom',
      'dad',
      'sis',
      'bro']
    myArry.push('me')
  }
>>>>>>> 93c123da5b432b32ae9823f973af9d1a1a18f421
