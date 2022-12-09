function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function primeBefAft(num) {
    let euMeAmarray = [];

    for (let i = num - 1; ; i--) {
        if (isPrime(i)) {
            euMeAmarray.push(i);
            break;
        }
    }

    for (let i = num + 1; ; i++) {
        if (isPrime(i)) {
            euMeAmarray.push(i);
            break;
        }
    }

    return euMeAmarray;
}