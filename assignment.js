
// Problem 1 =kilometerToMeter
function kilometerToMeter(km) {
    var kilometer = km * 1000;
    return (kilometer);
}
/*var result = kilometerToMeter(32)
console.log(result);*/


// Problem 2 =budgetCalculator
 var watchPrice = 50;
 var phonePrice = 100;
 var laptopPrice = 500;
 function budgetCalculator(Watch, Phone, Laptop) {
     var watchTotal = Watch * 50;
    var phoneTotal = Phone * 100;
    var laptopTotal = Laptop * 500;

     return watchTotal + phoneTotal + laptopTotal;
}
/*var result = budgetCalculator (2,1,1);
console.log( result);*/



//Problem 3 =hotelCost
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
/*var finalCost = hotelCost (32);
console.log (finalCost);*/







// problem 4 = megaFriend
var friendsName= ['Suma','Khairul','Jahir','Mohima','Uma'];
var largeWord = friendsName[0];

function megaFriend(){
    for (var i=0; i < friendsName.length; i++){
        var element = friendsName [i];
        if (element.length > largeWord.length){
            largeWord = element
        }
    }
    return largeWord;
}
/*var largestName = megaFriend(friendsName);
console.log (largestName);*/
