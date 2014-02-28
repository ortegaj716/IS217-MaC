var expect = require("chai").expect; 
var assert = require("chai").assert;
var myTests = require("../lib/myTests.js");

describe("Passing Tests", function(){
	describe("#add()", function(){
		it("should add two numbers together", function(){
			var args = [2,5];
			var results = myTests.add(args);

			expect(results).to.equal(7);
		});
	});

	describe("#letterGrade()", function(){
		it("should return a letter grade when given a number", function(){
			var results = myTests.letterGrade(87);
			//expect(results).to.be.a('string');
			assert.isString(results,"Letter grade received!");
		});
	});

	describe("#isThisBiggerThanThat()", function(){
		it("should return a boolean", function(){
			var results = myTests.isThisBiggerThanThat(4,100);
			assert.isBoolean(results,"Boolean received!");
		});
	});

	describe("#power()", function(){
		it("should return a number", function(){
			var results = myTests.power(8);
			assert.isNumber(results,"Number received!");
		});
	});

	describe("#halve()", function(){
		it("should return a smaller positive number", function(){
			var results = myTests.halve(50);
			expect(results).to.be.below(50);
		});
	});
});

describe("Failing Tests", function(){
	describe("#multiplyByZero()", function(){
		it("should return as 0", function(){
			var results = myTests.multiplyByZero(100);
			expect(results).to.equal(0);
		});
	});

	describe("#firstLetter()", function(){
		it("should return the first letter", function(){
			var results = myTests.firstLetter("Hello");
			expect(results).to.equal("H");
		});
	});

	describe("#numberAsString()", function(){
		it("should return a number as a string", function(){
			var results = myTests.numberAsString(5);
			expect(results).to.equal("5");
		});
	});
});
