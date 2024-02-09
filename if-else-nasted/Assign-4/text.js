function calculateMoney(ticketSell) {
    if (ticketSell >= 0) {
        return (ticketSell * 120) - (500 + (8 * 50));
    }
    return "Invalid Number";
}

function checkName(name) {
    if (typeof name == 'string') {
        const acceptableEndingLatter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];     
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