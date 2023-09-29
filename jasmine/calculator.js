/**
 * Calculator function constructor.
 * @constructor
 */
function Calculator() {
    this.total = 0;
  }
  
  /**
   * Adds value to current total.
   *
   * @param {number} number
   * @returns {*}
   */
  Calculator.prototype.add = function (number) {
    return this.total += number;
  };
  
  /**
   * Subtracts number from current total.
   *
   * @param {number} number
   * @returns {*}
   */
  Calculator.prototype.subtract = function (number) {
    return this.total -= number;
  };
  
  /**
   * Multiplies value to current total.
   *
   * @param {number} number
   * @returns {*}
   */
  Calculator.prototype.multiply = function (number) {
    return this.total *= number;
  };
  
  /**
   * Divides value to current total.
   *
   * @param {number} number
   * @returns {*}
   */
  Calculator.prototype.divide = function (number) {
    if (number === 0) {
      throw new Error('Cannot divide by zero');
    }
  
    return this.total /= number;
  };

  Object.defineProperty(Calculator.prototype, 'version', {

      get: function(){
        return fetch('https://gist.githubusercontent.com/pamuba/c414a053d923444d68fc211cb090cec8/raw/988f50e2efd1e9933958c5a26b6e5eda56469f9b/version.json')
             .then(function(result){
               return result.json()
             })
             .then(function(json){
               console.log(json.version)
               return json.version;
             })
      
    },
    enumerable:true,
    configurable:true
  })

  