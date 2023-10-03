/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {

    var initialVal = init;
    var currVal = init;
    return {
        increment: function () {
            return ++currVal;
        },
        decrement: function () {
            return --currVal;
        },
        reset: function () {
            currVal = initialVal;
            return currVal;
        }
    }
};
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */