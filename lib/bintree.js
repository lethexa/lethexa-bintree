/**
 * Implementation of a binary tree.
 * @constructor
 * @param min {Number} start range
 * @param max {Number} end range
 * @param level {Number} intersection level
 * @param valueCallback {Function} Callback to get the value from an object.
 */
exports.BinTree = function(min, max, level, valueCallback) {
  var items = [];
  this.parent = undefined;
  var left;
  var right;

  this.registerItem = function(item) {
    addItem(item);          
  };

  this.unregisterItem = function(item) {

  };

  var getValueOf = function(item) {
    if(valueCallback !== undefined) {
      return valueCallback(item);
    }
    else {
      if(item.getValue !== undefined) {
        return item.getValue();
      }
      else {
	throw Error('No getValue- or callback-function specified');
      }
    }
  };

  /**
   * Calls the callback for all items in the range.
   * @method forEachInRange
   * @param leftBorder {Number} The left border
   * @param rightBorder {Number} The right border
   * @param resultCallback {Function} Is called when an item is found
   */
  this.forEachInRange = function(leftBorder, rightBorder, resultCallback) {
    if(isOutOfTile(leftBorder, rightBorder)) {
      return;
    }

    if(isLeaf()) {
      callForEachItem(resultCallback);      
    } 
    else {
      if(left !== undefined)
	left.forEachInRange(leftBorder, rightBorder, resultCallback);
      if(right !== undefined)
	right.forEachInRange(leftBorder, rightBorder, resultCallback);
    }
  };

  var callForEachItem = function(callback) {
    if(callback !== undefined) {
      items.forEach(callback);
    } 
  };

  var isLeaf = function() {
    return left === undefined && right === undefined;
  };

  var isOutOfTile = function(leftBorder, rightBorder) {
    return (leftBorder > max && rightBorder > max) || (leftBorder < min && rightBorder < min); 
  };

  var intersectsTile = function(leftBorder, rightBorder) {
    return isValueInTile(leftBorder) || isValueInTile(rightBorder);
  };
  
  var isContainedInTile = function(leftBorder, rightBorder) {
    return isValueInTile(leftBorder) && isValueInTile(rightBorder);
  };
  
  var isValueInTile = function(value) {
    return value >= min && value < max;
  };


  var addItem = function(item) {
    if(level <= 0) {
      items.push(item);
    }
    else {
      var middle = (min + max) / 2.0;
      var value = getValueOf(item); 
      if(value >= min && value < middle) {
        left = new exports.BinTree(min, middle, level-1, valueCallback);
	left.parent = this;
      }
      else if(value >= middle && value < max) {
        right = new exports.BinTree(middle, max, level-1, valueCallback);
	right.parent = this;
      }
    }
  };
};


