function groupAnagrams(words) {
    // Iniatialize anagrams to save data 
    let anagrams = {};

    // Looping word in array
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        // Sorting letter in word
        let sortedWord = word.split('').sort().join('');


        if (anagrams.hasOwnProperty(sortedWord)) {
            // Add original word to appropriate group
            anagrams[sortedWord].push(word);
        } else {
            anagrams[sortedWord] = [word];
        }
    }

    // Create array from group anagram
    let result = [];
    for (let key in anagrams) {
        if (anagrams.hasOwnProperty(key)) {
            result.push(anagrams[key]);
        }
    }

    return result
}

let words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);