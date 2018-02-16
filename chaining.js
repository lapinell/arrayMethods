const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];

function descending (a,b) {
    return b-a;
}

function findAmt (array) {
    count = 0;
    // console.log(count);
    for (i=0; i < array.length; i++ ) {
        if (array[i] - 19 > -1 ) {
            count++;
            console.log('updated count', count);                     
        }
    }
    // console.log('final count:', count);
    return count;
}

function mathematizedItems (number) {
    console.log('incoming number', number);
    let mathedItem = number * 1.5 - 1;
    console.log('mathedItem', mathedItem);
    return mathedItem;
}

let numbersOver19 = findAmt(integers);

let numberArray = integers.sort(descending).splice(0, numbersOver19).map(mathematizedItems);

document.getElementById("x").innerText = numberArray;



