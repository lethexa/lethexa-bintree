var assert = require('assert');
//var vecmat = require('../lib/vecmat.js');
//var vecmat = require('../coverage/instrument/lib/vecmat.js');
var bintree = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../lib/') + 'bintree.js');



describe('BinTree', function () {    

    var TestItem = function(value) {
      this.getValue = function() {
	return value;
      };
    };


    describe('#ForEachInRange()', function () {
        it('should return one item when in range and subdivision level os 0', function () {
            var resultList = [];
            var tree = new bintree.BinTree(0, 10, 0);
            tree.registerItem(new TestItem(4));

            tree.forEachInRange(0, 5, function(item) {
	      resultList.push(item);
	    });

            assert.equal(resultList.length, 1);
        });
    });

    describe('#ForEachInRange()', function () {
        it('should return one item when in range and subdivision level is 1', function () {
            var resultList = [];
            var tree = new bintree.BinTree(0, 10, 1);
            tree.registerItem(new TestItem(4));

            tree.forEachInRange(0, 5, function(item) {
	      resultList.push(item);
	    });

            assert.equal(resultList.length, 1);
        });
    });

});


