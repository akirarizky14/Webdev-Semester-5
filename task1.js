// method sum
let a = 1;
let b = 2;
console.log(a+b);

// method reverse case
let reversecase = function (str) {
    let s = '';
    let i = 0;
    while (i < str.length) {
        let n = str.charAt(i);
        if (n == n.toUpperCase()) {
            n = n.toLowerCase();
        } else {
            n = n.toUpperCase();
        }
        i += 1;
        s += n; 
    }
    return s;
};
console.log(reversecase("MyTestString"));

// method reverse array 
let reversearray = function () {
    let arr = ['akira','rizky','rosyadi'];
    p = arr.reverse();
    return p;
};
console.log(reversearray())


