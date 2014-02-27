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

});
