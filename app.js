function leapYears(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

leapYears(2020); // Output: true
leapYears(2021); // Output: false