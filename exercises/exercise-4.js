function factorialOfNumber(number) {

    if (number < 0) {
        return "Factorial does not exist for negative numbers ";
    } else if (number === 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

let factorial = factorialOfNumber(5);
console.log(factorial);