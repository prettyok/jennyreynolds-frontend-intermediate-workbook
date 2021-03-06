'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var stacks = {
	a: [4, 3, 2, 1],
	b: [],
	c: []
};

function printStacks() {
	console.log("a: " + stacks.a);
	console.log("b: " + stacks.b);
	console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
	// Your code here
	stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
	// Your code here
	var arrayStart = stacks[startStack];
	var arrayEnd = stacks[endStack];

	if (arrayStart[arrayStart.length - 1] < arrayEnd[arrayEnd.length - 1] || arrayEnd.length === 0) {
		return true;
	} else {
		return false;
	}
}

function checkForWin() {
	// Your code here
	if (stacks.b.length === 4 || stacks.c.length === 4) {
		console.log("You win!");
		return true;
	} else {
		return false;
	};
}

function towersOfHanoi(startStack, endStack) {
	// Your code here
	isLegal(startStack, endStack);

	movePiece(startStack, endStack);
	checkForWin();
}

function getPrompt() {
	printStacks();
	prompt.get(['start stack', 'end stack'], function (error, result) {
		towersOfHanoi(result['start stack'], result['end stack']);
		getPrompt();
	});
}

// Tests

if (typeof describe !== 'undefined') {

	describe('#towersOfHanoi()', function () {
		it('should be able to move a block', function () {
			towersOfHanoi('a', 'b');
			assert.deepEqual(stacks, {
				a: [4, 3, 2],
				b: [1],
				c: []
			});
		});
	});

	describe('#isLegal()', function () {
		it('should not allow an illegal move', function () {
			assert.equal(isLegal('a', 'b'), false);
		});
		it('should allow a legal move', function () {
			assert.equal(isLegal('a', 'c'), true);
		});
	});
	describe('#checkForWin()', function () {
		it('should detect a win', function () {
			stacks = {
				a: [],
				b: [4, 3, 2, 1],
				c: []
			}
			assert.equal(checkForWin(), true);
			stacks = {
				a: [1],
				b: [4, 3, 2],
				c: []
			}
			assert.equal(checkForWin(), false);
		});
	})
} else {

	getPrompt();

}