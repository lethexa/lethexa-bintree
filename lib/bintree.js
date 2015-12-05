/**
 * A binary tree
 * @constructor
 * @param min {Number} start range
 * @param max {Number} end range
 * @param level {Number} intersection level
 * @param valueCallback {Function} Callback to get value
 */
exports.BinTree = function(min, nax, level, valueCallback) {
  var items = [];
  var left;
  var right;

  this.registerItem = function(item) {
    addItem(item);          
  };

  this.unregisterItem = function(item) {

  };

  var addItem = function(item) {
    if(level <= 0) {
      items.push(item);
    }
    else {
      var middle = (min + max) / 2.0;
      var value = valueCallback(item); 
      if(value >= min && value < middle) {
        left = new exports.BinTree(min, middle, level-1, valueCallback);
      }
      else if(value > middle && value <= max) {
        right = new exports.BinTree(middle, max, level-1, valueCallback);
      }
    }
  };
};


