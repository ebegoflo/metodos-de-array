// No se puede:
// Usar el método .forEach , .map , .reduce, filter

var persons = [
  {id : 1, name : "John", tags : "javascript"},
  {id : 2, name : "Alice", tags : "javascript"},
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];

var numberArray = [1,2,3,4,5,6,7,8,9,10];


// 1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function myForEach(array,callback){
		// var person = document.getElementById("info");
    for (var i = 0; i < array.length; i++) {
      callback(array[i]);
    }
	}
  myForEach(persons,showForEach);
  
  function showForEach(i) {
    console.log(i);
  }


// 2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
function miMap(array, callback){
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i] *2);
    }
    console.log(newArray);
    return newArray;
	}



// 3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
function miFilter(array, callback){
    var evenNumbers = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]);
      }
    }
    console.log(evenNumbers);
    return evenNumbers;
	}


//
// 4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
function miReduce(array, reduce){




	}

// Bonus:
// 1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
function miSort(arreglo, callback){

	}
