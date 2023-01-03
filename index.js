var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];

// declare empty variables
let totalMonths = 0;
let netTotal = 0;
let changes = new Array(finances.length - 1); // constructor function to declare new array to store the change in profit/loss – one shorter than the finances array because we are looking at the change between
let biggestIncrease = { date: '', amount: 0 }; // use object literal syntax to create object and assign values in a single staement
let biggestDecrease = { date: '', amount: 0 };
let totalChange = 0;

// Loop through each element in the finances array and extract date and amount using array destructuring
for (let i = 0; i < finances.length; i++) {
    let date = finances[i][0];
    let amount = finances[i][1];

    // Increment the total number of months and add the current amount to the net total
    totalMonths++; // equivalent to 'totalMonths = totalMonths + 1'
    netTotal += amount; // this to 'netTotal = netTotal + amount'

    // For loop to calculate change in profits/losses month-to-month. if the current element is not the first element in the array, calculate the change in profit/losses
    if (i > 0) {
        let change = amount - finances[i - 1][1];
        changes[i - 1] = change;
        totalChange += change;

        // If the change is greater than the current highest change, update the highest change
        if (change > biggestIncrease.amount) {
            biggestIncrease.date = date;
            biggestIncrease.amount = change;
        }

        // If the change is lower than the current lowest change, update the lowest change
        if (change < biggestDecrease.amount) {
            biggestDecrease.date = date;
            biggestDecrease.amount = change;
        }
    }
}

// Calculate the average change in profits/losses
let averageChange = totalChange / changes.length;

// Output the results
console.log("Financial Analysis");
console.log("Total months: " + totalMonths); // Outputs total number of months
console.log("Average change: $" + averageChange.toFixed(2));  // Outputs average change in Profit/Loss
console.log("Greatest increase in profits: " + biggestIncrease.date + " ($" + biggestIncrease.amount + ")"); // Outputs date and amount of greatest increase
console.log("Greatest decrease in profits: " + biggestDecrease.date + " ($" + biggestDecrease.amount + ")"); // Outputs date and amount of greatest decrease
