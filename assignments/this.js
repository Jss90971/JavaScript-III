/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When the this value is in the global scope will now be considered the console object.
* 2. When trying to call upon an object the this keyword is used with dot notation.
* 3. When using a constructor function the this keyword can be used to return an object.
* 4. When using the methods call or apply the this method is explicitly implied.
*
* write out a code example of each explanation above
*/

// Principle 1
function testCode(code){
  console.log(this);
  return code;
}

testCode('x + y');

// Principle 2
const anObj = {
  greet: 'Hello',
  saysHello: function(name){
    console.log(`${this.greet} ${this.name}`);
  }
};
anObj.saysHello('Julian');

// Principle 3
function Project(cortana){
  this.greeting = 'Good afternoon'
  this.cortana = cortana;
  this.speak = function(){
    console.log(this.greeting + ' ' + this.cortana);
  }
};

const siri = new Project('siri');

siri.speak();


// Principle 4
const sports = ['Soccer', 'Football', 'Baseball'];

function sportsILike(sport1, sport2, sport3){
  return `${sport1} is way better to watch rather than ${sport2} and ${sport3}.`
}

console.log(sportsILike(...sports));
