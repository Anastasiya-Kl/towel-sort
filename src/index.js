
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix == undefined || matrix.length == null || matrix == null ){
        return [];
    }
    matrix.map(function (element, i) {
        result = (i % 2 === 0) ? result.concat(element) : result.concat(element.reverse());
});
    return result;
}
