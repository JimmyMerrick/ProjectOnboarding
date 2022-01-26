

function Disarium(n){
    let string = n.toString();
    let arr = string.split('');
    let sum = 0;
    let bool = false;
    for (i=0;i<arr.length;i++){
        let num = parseInt(arr[i]);
        sum = sum + (num**(i+1));
        console.log(sum);
    }
    if (sum === n){
        bool = true;
    }

    return bool;
}

console.log(Disarium(75));

console.log(Disarium(135));

console.log(Disarium(518));
console.log(Disarium(544));
console.log(Disarium(8));
console.log(Disarium(466));