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
	return array.sort(function(a,b) {
		return a.charAt(a.length-1) - b.charAt(b.length-1);});
}

var getFirstHalf = function(string) {
    return 'Write your method here';
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
	var result = [];
	for (i = 0 ; i < array.length-1 ; i += 2) {
		result[array[i]] = array[i+1];
	}    
	return result;
}

var getAllLetters = function(array) {
	var listeChar = [];
	for (var i = 0 ; i < array.length ; i++) {
		var index = array[i];
		listeChar[index] = "Coucou Toto !";
	}
	return listeChar;
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
	return Math.ceil(number);
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
	return Math.sqrt(number);
}

var factorial = function(number) {
	var result = 1;
	if (number === 0) {return result;}
	for (i = 1 ; i <= number ; i++) {
		result *= i;
	}
	return result;
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
	var result = Math.round((number - 32) / 1.8000);
	return result;
}

var letterPosition = function(array) {
    return 'Write your method here';
}
