/*
    Construct an algorithm to check whether two words (or phrases) are anagrams or not!
    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
    typically using all the original letters exactly once
*/

function isAnagram(input1: string, input2: string) : boolean {

    if (input1.length !== input2.length ) { return false; };
    const a1 = input1.split('').sort();
    const a2 = input2.split('').sort();

    for ( let i = 0; i < input1.length; i++ ) {
        if (a1[1] !== a2[i] ) {
            return false;
        }
    }

    return true;
}

