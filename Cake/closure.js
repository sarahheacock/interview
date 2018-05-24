var length = 10;
function fn(){
  console.log(this.length);
}

var obj = {
  length: 5,
  m: function(fn){
    fn();
    arguments[0]();
  }
}

// Node js --> undefined, 2
// window is another object/context --> 10, 2
obj.m(fn, 1);

var hero = {
  name: 'Jon',
  func: function(){
    console.log(this.name);
  }
}

var myFunc = hero.func.bind(hero);
myFunc();
hero.func();


var x = 21;
var girl = function(){
  console.log(x);
  var x = 20;
}

girl();
