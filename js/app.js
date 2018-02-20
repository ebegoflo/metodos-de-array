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



function functionCallBack(array,callback) {
  callback(array);
}

// 1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function myForEach(array){
		// var person = document.getElementById("info");
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
	}
  
  functionCallBack(persons,myForEach);

// 2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
function miMap(arreglo, callback){
    // var mapArray = [];
    // for (var i = 0; i < array.length; i++) {
    //   mapArray.push(array[i][])
    // }
	}
//
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

  functionCallBack(numberArray,miFilter);
//
// 4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
function miReduce(arreglo, reduce){

	}

// Bonus:
// 1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
function miSort(arreglo, callback){

	}
