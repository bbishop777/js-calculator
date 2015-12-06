/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 myCalculator = calculatorModule();

function calculatorModule () {
  var memory = 0;
  var total = 0;
  var newCalc = {load: _load, getTotal: _getTotal, add: _add, subtract: _subtract,
    multiply: _multiply, divide: _divide, recallMemory: _recallMemory,
    saveMemory: _saveMemory, clearMemory: _clearMemory, validations: _validations};

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  function _load (x) {
    if (_validations(x)) {
      total = x;
    }
      return total;
  }



  /**
   * Return the value of `total`
   * @return { Number }
   */
  function _getTotal () {
    return total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  function _add (x) {
    if (_validations(x)) {
      total = total + x;
    }
  }



  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function _subtract (x) {
    if (_validations(x)) {
    total = total - x;
    }
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function _multiply (x) {
    if (_validations(x)) {
      total = total * x;
    }
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function _divide (x) {
    if (_validations(x)) {
    total = total / x;
   }
  }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function _recallMemory () {
    return memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */
   function _saveMemory () {
    memory = total;
   }

  /**
   * Clear the value stored at `memory`
   */
   function _clearMemory () {
    memory = 0;
   }
  /**
   * Validation
   */
  function _validations (x) {
    console.log(" Hello");
    if (typeof x !== "number") {
      throw new Error("Input not valid");
    }
    else {
      return true;
    }
  }
return newCalc;
}


