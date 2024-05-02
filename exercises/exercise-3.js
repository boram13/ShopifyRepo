function logNumber() {

    for (let i = 0; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(" Eurostep ");
        } else if (i % 3 === 0) {
            console.log(" Euro ");
        } else if (i % 5 === 0) {
            console.log(" Step ");
        } else {
            console.log(i);
        }
    }
}

logNumber();
