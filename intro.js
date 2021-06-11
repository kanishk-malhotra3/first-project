var age = 23; // number
var fname = 'syed'; // string
var gender = true; // boolean
var interest = null; // null
var fruits = ['kiwi', 'berry', 'melon']; // array  []
var user = { tech: 'angular', exp: 8 }; // object {}
var undf; // undefined  -- no value
console.log(age);
console.log(fname);
console.log(gender);
console.log(interest);
console.log(fruits);
console.log(user);
console.log(undf);
var a = 2;
var b = 3;
//BODMAS (Brackets Of  Division Multiply Addition Subtraction)
console.log(a + b);
console.log('a + b :: ' + a + b); //a + b :: 23  
console.log('a + b :: ' + (a + b)); //a + b :: 5
console.log('a - b :: ' + (a - b)); //-1
console.log('a * b :: ' + (a * b)); //6
console.log('a / b :: ' + (a / b)); //0.66
console.log('a % b :: ' + (a % b)); //2
//a = a+b;
a += b; // 5
console.log(a);
a -= b; // 2
console.log(a);
a *= b; // 6
console.log(a);
a /= b; // 2
console.log(a);
a %= b; // 2
console.log(a);
//a++ / a= a+1
a = 2;
a++;
console.log(a); // 3
++a;
console.log(a); //4
a--;
console.log(a); //3
--a;
console.log(a); //2
console.log(a++); //2 post increment (print  then increment)
console.log(a); // 3
console.log(++a); //4 pre increment (increment and print)
console.log(a); //4
console.log(a--); //4 post decrement (print & decrement)
console.log(a); //3
console.log(--a); //2 pre decrement (decrement & print)
console.log(a); //2
if (a > 2) {
    console.log('this is if');
}
else if (a < 2) {
    console.log('this is else if');
}
else {
    console.log(' this is else');
}
var b = 3;
var d;
// && -- all conditions should satisfy
// || -- atlease one condition should satisfy
// === / !== (not double equals)  -- it will check both value and datatype
// == / != (not equals) -- it will check only value.
// false conditions : 0 / false / null / '' (empty string) / undefined
if (d) {
    console.log('IF');
}
else {
    console.log('ELSE');
}
var c = a > 2 ? 'yes' : 'no'; // ternary opertaor
console.log(c);
switch (a) {
    case 2:
        console.log('this is 2');
        break;
    case 23:
        console.log('this is 23');
        break;
    case 234:
        console.log('this is 234');
        break;
    case 2345:
        console.log('this is 2345');
        break;
    default:
        console.log('this is default');
        break;
}
for (var i = 0; i < 10; i++) {
    console.log('var for ::' + i);
}
var k = 0;
while (k < 10) {
    console.log('while :: ' + k);
    k++;
}
var l = 0;
do {
    console.log('do while :: ' + l);
    l++;
} while (l < 10);
function callMe() {
    console.log('callMe invoked');
}
callMe();
function pcallMe(a, b) {
    console.log("callMeParams invoked :: " + (a + b));
}
pcallMe(2, 3);
function rpcallMe(a, b) {
    console.log('rpcallMe invoked :: ' + (a + b));
    var c = a - b;
    var d = a * b;
    return c;
}
var res = rpcallMe(2, 3);
console.log(res);
var vcallMe = function () {
    console.log('vcallMe invoked');
};
vcallMe();
var vpcallMe = function (a, b) {
    console.log("vpcallMe invoked :: " + (a + b));
};
vpcallMe(2, 3);
var vrpcallMe = function (a, b) {
    console.log('vrpcallMe invoked :: ' + (a + b));
    var c = a - b;
    var d = a * b;
    return c;
};
var vres = vrpcallMe(true, 3);
console.log(vres);
