exports = module.exports = {};

exports.add = function(args){
	//Add each argument!
	return args[0] + args[1];
}

exports.letterGrade = function(grade){
	//What letter grade is this grade?
	if(grade <= 100 && grade >= 90)
		return 'A';
	if(grade <= 89 && grade >= 80)
		return 'B';
	if(grade <= 79 && grade >= 70)
		return 'C';
	if(grade <= 69 && grade >= 65)
		return 'D'
	if(grade < 65 && grade >= 0)
		return 'F';
	
	return null;
}

exports.isThisBiggerThanThat = function(thisOne,thatOne){
	//Self explanatory
	if(thisOne > thatOne)
		return true;
	else
		return false;
}

exports.power = function(num){
	//Power of 2!
	return num * num;
}

exports.halve = function(num){
	//Divide by 2!
	return num / 2;
}

exports.multiplyByZero = function(num){
	//Multiply by 0!
	return num + 0; //Oops!
}

exports.firstLetter = function(s){
	//Get the first letter of a string!
	return s.substr(1); //Whoops!
}

exports.numberAsString = function(num){
	//Convert this integer into a string!
	return num; //This function basically does nothing.
}
