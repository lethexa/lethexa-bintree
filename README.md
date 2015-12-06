Installation
------------

	npm install
	grunt

Usage
-----

	var bintree = require('lethexa-bintree');
	
	var TestItem = function(value) {
		this.getValue = function() {
			return value;
		};
	};


	var resultList = [];
	var tree = new bintree.BinTree(0, 10, 0);
	tree.registerItem(new TestItem(4));

	tree.forEachInRange(0, 5, function(item) {
		resultList.push(item);
	});

	console.log(resultList);


Contributors
------------

* Lethexa


