function findAgeInDogYears (myAge) {
    var myAge = parseFloat(prompt("What is your age in Gregorian calendar years?")) // Prompt stores the user's inputted age in 'myAge'
    const earlyYearsCoeff = 10.5 // Dogs age quickly at first. Each of the first two Gregorian calendar years are biologically similar to the first 10.5 years of a human's life.
    const laterYearsCoeff = 4 // After the first two Gregorian calendar years, dogs age more slowly but still more quickly than humans. At this point, their biological age for every one Gregorian year, is similar to how much a human would age in four Gregorian years.
    if (0 < myAge && myAge <= 2) {
        dogYears = earlyYearsCoeff * myAge;
        console.log(dogYears);
        dogYears_output;
    } else if (myAge > 2) {
        dogYears = earlyYearsCoeff + (laterYearsCoeff * myAge);
        console.log(dogYears);
        dogYears_output;
    } else {
        alert('That age is not possible. Please enter an age greater than 0 years.');
    };
    var dogYears_output = document.getElementById('findAgeInDogYears_output').innerHTML = `Your age in dog years is ${dogYears}`;
};