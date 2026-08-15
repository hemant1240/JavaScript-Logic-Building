function countVowelsAndConsonants(str) {
    if( typeof str !== 'string'){
        return " Please provide a valid string input.";
    }
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (/[a-zA-Z]/.test(char)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

 console.log(countVowelsAndConsonants("Hello World!"));
