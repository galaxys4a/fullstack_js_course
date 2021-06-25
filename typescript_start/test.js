// Closure

function myClock(n) {
    for (var i = 0; i < n; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}

function myClock2(n) {
    for (var i = 0; i < n; i++) {
        setTimeout(function(j) {
            return function() {
                console.log(j);
            }
        }(i), 1000 * i);
    }
}

//ES6
function myClock3(n) {
    for (let i = 0; i < n; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i);
    }
}

function isPalindrome(s) {
    s = s.toLowerCase().replace(/\s/g, '');
    var result = true;
    for (var i = 0, n = s.length; i < n / 2; i++) {
        if (s[i] != s[n - 1 - i]) {
            result = false;
            break;
        }
    }
    return result;
}

var n = 10;
//myClock(n);
//myClock2(n);
//myClock3(n);

var s = ' А роза упала на лапу Азора ';
var result = isPalindrome(s);
console.log(result);
