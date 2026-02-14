let country = ["Australia", "Germany", "United States of America"];

function longestCountryName(country) {
    let ansIndex = 0;

    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIndex].length;
        let curLen = country[i].length;
        if (curLen > ansLen) {
            ansIndex = i;
        }
    }
    return country[ansIndex];
}

// Copied 