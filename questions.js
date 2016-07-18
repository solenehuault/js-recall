var selectElementsStartingWithA = function(array) {
	var result = [];	
	for (var i = 0 ; i < array.length ; i++) {
		var first_letter = array[i].toLowerCase().charAt(0);
		if (first_letter === 'a') {
			result.push(array[i]);
		}
	}    
	return result;
}

var selectElementsStartingWithVowel = function(array) {
    var result = [];	
	for (var i = 0 ; i < array.length ; i++) {
		var first_letter = array[i].toLowerCase().charAt(0);
		if (first_letter === 'a' || first_letter === 'e' || first_letter === 'i' || first_letter === 'o' 
		|| first_letter === 'u' || first_letter === 'y') {
			result.push(array[i]);
		}
	}    
	return result;
}

var removeNullElements = function(array) {
	var result = [];
	for (var i = 0 ; i < array.length ; i++) {
		if (array[i] != null) {
			result.push(array[i]);
		}
	}     
	return result;
}

var removeNullAndFalseElements = function(array) {
	var result = [];
	for (var i = 0 ; i < array.length ; i++) {
		if (array[i] != null && array[i] !== false) {
			result.push(array[i]);
		}
	}     
	return result;
}

var reverseWordsInArray = function(array) {
	var result = [];
	for (var i = 0 ; i < array.length ; i++) {
		result.push(array[i].split("").reverse().join(""));
	}    
	return result;
}

var everyPossiblePair = function(array) {
	var result = [];
	for (var i = 0 ; i < array.length ; i++) {
		var paire = [];
		paire.push(array[i]);
		if (i == array.length-1) {		
			paire.push(array[0]);
		}
		else { 
			paire.push(array[i+1]);
		}
		result.push(paire.sort());
	}
	return result.sort();
}

var allElementsExceptFirstThree = function(array) {    
	array.splice(0,3);
	return array;
}

var addElementToBeginning = function(array, element) {
	array.unshift(element);
	return array;
}

var sortByLastLetter = function(array) {
	for (i = 0 ; i < array.length ; i++) {
		array[i] = array[i].split("").reverse().join("");
	}
	array.sort();
	for (i = 0 ; i < array.length ; i++) {
		array[i] = array[i].split("").reverse().join("");
	} 
	return array;
}

var getFirstHalf = function(string) {
    return string.slice(0, Math.ceil((string.length/2)));
}

var makeNegative = function(number) {
	if (number <= 0) {return number;}
	else {return number-(2*number)};
}

var numberOfPalindromes = function(array) {
	var result = 0;
	for (i = 0 ; i < array.length ; i++) {
		if (array[i].split("").reverse().join("") === array[i]) {
			result++;
		}
	}    
	return result;
}

var shortestWord = function(array) {
	var small = array[0];
	for (i = 1 ; i < array.length ; i++) {
		if (small.length > array[i].length) {
			small = array[i];
		}
	}
	return small;
}

var longestWord = function(array) {
	var long = array[0];
	for (i = 0 ; i < array.length ; i++) {
		if(long.length < array[i].length) {
			long = array[i];
		}
	}
	return long;
}

var sumNumbers = function(array) {
	var result = array[0];
	for (i = 1 ; i < array.length ; i++) {
		result = result + array[i];
	}    
	return result;
}

var repeatElements = function(array) {
	var taille = array.length;
	for (i = 0 ; i < taille ; i++) {
		array.push(array[i]);
	}    
	return array;
}

var stringToNumber = function(string) {
	return parseInt(string);
}

var calculateAverage = function(array) {
	var result = array[0];
	for (i = 1 ; i < array.length ; i++) {
		result = result + array[i];
	}
	return (result / array.length);
}

var getElementsUntilGreaterThanFive = function(array) {
	var result = [];
	for (i = 0 ; i < array.length ; i++) {
		if (array[i] <= 5) {
			result.push(array[i]);
		}
		else {
			return result;
		}
	}
}

var convertArrayToObject = function(array) {
	var result = {};
	for (var i = 0 ; i < array.length-1 ; i = i+2) {
		var index = array[i];
		result[index] = array[i+1];
	}    
	return result;
}

var getAllLetters = function(array) {
	var listeChar = {};
	for (var i = 0 ; i < array.length ; i++) {
		for (var j = 0 ; j < array[i].length ; j++) {
			var index = array[i].charAt(j);
			listeChar[index] = "";
		}
	}
	var result = [];
	for (x in listeChar) {
		result.push(x);
	}
	return result.sort();
}

var swapKeysAndValues = function(object) {
	var result = {};
	for (x in object) {
		var index = object[x];
		result[index] = x;
	}
	return result;
}

var sumKeysAndValues = function(object) {
	var result = 0;
	for (x in object) {
		result = result + parseInt(x);
		result = result + parseInt(object[x]);
	}
	return result;
}

var removeCapitals = function(string) {
	var result = [];
	for (var i = 0 ; i < string.length ; i++) {
		if (!(string.charCodeAt(i) <= 90 && string.charCodeAt(i) >= 65)) {
			result.push(string.charAt(i));
		}
	} 
	return result.join("");
}

var roundUp = function(number) {
	return Math.ceil(number);
}

var formatDateNicely = function(date) {
	var result = [];
	result.push("0" + date.getDate());
	result.push("0" + (date.getMonth()+1));
	result.push("20" + (date.getYear()-100));
	result = result.join("/");
	return result;
}

var getDomainName = function(string) {
	var index = string.indexOf("@");
	var index_end = string.lastIndexOf(".");
	return string.substring(index+1, index_end);
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
	for (i = 0 ; i < string.length ; i++) {	
		if (!((string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) || (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) 
			|| (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122))) {
			console.log(string.charAt(i));
			return true;
		}
	}
	return false;
}

var squareRoot = function(number) {
	return Math.sqrt(number);
}

var factorial = function(number) {
	if (number === 0) {return (1);}
	return (number * factorial(number-1));
}

var findAnagrams = function(string) {
	return 'Write your method here';
}

var convertToCelsius = function(number) {
	var result = Math.round((number - 32) / 1.8000);
	return result;
}

var letterPosition = function(array) {
	var result = [];
	for (i = 0 ; i < array.length ; i++) {
		result.push(array[i].toLowerCase().charCodeAt(0) - 96);
	}
	return result;
}
