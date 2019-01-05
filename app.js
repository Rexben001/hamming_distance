document.getElementById('hammingForm').addEventListener('submit', hamming);

//clears the result message
document.getElementById('stringInput').addEventListener('focus', function () {
    let result = document.getElementById('result');
    if (result.value !== '') {
        result.innerHTML = '';
    }
});



function hamming(event) {

    let count = 0, stringVal, splittedValue, firstString, secondString;

    //To prevent the form from submitting by default
    event.preventDefault();

    //Retrieve the input value
    stringVal = document.getElementById('stringInput').value;

    if (stringVal === '' || stringVal === null || !stringVal.includes(',')
        || (/^[a - ZA - Z0 - 9]/.test(stringVal))) {

        document.getElementById('result').innerHTML = '<em>Error: Pls,\
        Enter two texts seperated by a comma</em>';
        return;
    }


    splittedValue = stringVal.toLowerCase().split(',');

    firstString = splittedValue[0].trim();

    secondString = splittedValue[1].trim();

    //Check if the length of the two texts has equal lengths
    if (firstString.length !== secondString.length) {

        document.getElementById('result').innerHTML = '<em>Error: Make sure\
        the length of the strings are equal</em>';
        return;
    }

    //Increment count by 1 if the correspondingsymbols are different at a particular position
    for (let i = 0; i < firstString.length; i++) {

        if (firstString[i] !== secondString[i]) {

            count += 1;
        }
    }

    document.getElementById('result').innerHTML = 'The hamming distance is: ' + count;
}

