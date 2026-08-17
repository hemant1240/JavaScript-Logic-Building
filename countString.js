function countWords(sentence) {
    console.log(sentence);
    const spilletedSentence = sentence.split(' ');

    return spilletedSentence.length;
}

console.log(countWords("I become a best human and also a best son"));