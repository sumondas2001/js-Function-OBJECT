// function number( num1, num2){
//     console.log(num1, num2);
//     var sum = num1 + num2;
//     return sum;
    

// }
// var total = number (50, 60);
// console.log(total)



// function bringSingara (Money){
//     var singaraPrice = 10;
//     var quenty = Money / singaraPrice;
//     return quenty;
// }
// var myTaka = 100;
// var singaras = bringSingara (myTaka);
// console.log ( singaras);


function bringSingara (Money){
    var quenty = 6;
    var singaraPrice = 10;
    var totalMonek = singaraPrice * quenty;
    var sum = Money - totalMonek;
    return sum;
}
var myTaka = 100;
var singaras = bringSingara(myTaka );
console.log(singaras);