function isPalindrome(num) {
    let original = num;
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reverse;
}

function checkTwoPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log("Both numbers are Palindromes");
    } else if (isPalindrome(num1)) {
        console.log("Only first number is a Palindrome");
    } else if (isPalindrome(num2)) {
        console.log("Only second number is a Palindrome");
    } else {
        console.log("Neither number is a Palindrome");
    }
}

checkTwoPalindromes(121, 343);
