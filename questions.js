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
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
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
    return 'Write your method here';
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
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
