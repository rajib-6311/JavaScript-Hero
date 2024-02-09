
// Problem - 1
function calculateMoney(ticketSell) {
    if (ticketSell >= 0) {
        return (ticketSell * 120) - (500 + (8 * 50));
    }
    return "Invalid Number";
}

const soldTickets = 1055;
const remainingMoney = calculateMoney(soldTickets);
// console.log(remainingMoney);

// Problem - 2
function checkName(name) {
    if (typeof name == 'string') {
        const acceptableEndingLatter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        name = name.trim();
        const lastChar = name.charAt(name.length - 1).toLowerCase();
        if (acceptableEndingLatter.includes(lastChar)) {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }  
    }
    else {
        return "Invalid";
    }
}
// console.log(checkName("hellt"));
// console.log(checkName(10));
// console.log(checkName("[jakir]"));
// console.log(checkName("ShantO"));

// Problem - 3
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && !isNaN(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(["1" , {num:2} , NaN ]));
// console.log(deleteInvalids([1 , 2 , -3 ] ));
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]} ));






// Problem - 4
function password(objects) {
    if (!objects.hasOwnProperty('name') || !objects.hasOwnProperty('birthYear') || !objects.hasOwnProperty('siteName')) {
        return 'invalid';
    }
    if (isNaN(objects.birthYear) || objects.birthYear.toString().length !== 4) {
        return 'invalid';
    }
    const firstLetter = objects.siteName.charAt(0).toUpperCase();
    const password = `${objects.siteName}#${objects.name}@${objects.birthYear}`;
    return password;
}


const inputObj = { name: "kolimuddin", birthYear: 1995, siteName: "google" };
// console.log(password(inputObj));

// Problem - 5
function monthlySavings(array, livingCost){
    if(Array.isArray(array) === true && typeof(livingCost) === 'number'){
        let totalIncome = 0;
        for(let i=0; i<array.length; i++){
            let income = array[i];
            if(income >= 3000){               
                totalIncome += income - ((income * 20) / 100); 
            }
            else{
                totalIncome += income;
            }
        }
        let savings = totalIncome - livingCost;

        if(savings >= 0){
            return savings;
        }
        else{
            return "earn more";
        }
    }
    else{
        return "invalid input";
    }

}

// console.log(monthlySavings([1000, 2000, 3000], 5400));
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ));
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
// console.log(monthlySavings(100, [ 900 , 2700 , 3400] ));






