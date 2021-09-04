//THE GOAL OF THIS FUNCTION
//This function accepts two arguments
// Check if 2nd string is an anagram of the first 

function isAnagram(str1, str2){
    //Not equal length of chars means not Anagram
    if (str1.length !== str2.length){
        return false;
    }
    //List the characters and character count of 1st string
    let lookUp = {};
    //If character don't exist on the list, set it to 1, otherwise add 1
    for (var letter of str1){
        lookUp[letter] ? lookUp[letter] +=1 : lookUp[letter] = 1;
    }
    // For every char that matches, less 1 count from the list
    // Else, exit the loop and return false
    for (var letter of str2){
        if (lookUp[letter]){
            lookUp[letter]-= 1;
        }else{
            return false;
        }   
    }
    return true;
    //If even single character missing, exit the function
    //If character exist, less 1 from the 
}

console.log(isAnagram("ppro","porp"));