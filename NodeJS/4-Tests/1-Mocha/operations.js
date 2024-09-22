module.exports.multyply = function(x, y){
    return x * y;
};

module.exports.add = function(x, y){
    return x + y;
};

module.exports.multyplyAsync = function(a, b, callback){
    setTimeout(function(){
        callback(a * b);
    }, 1000);
};

// Работаем с assert
module.exports.subtraction = function(a, b){
    return a - b;
};