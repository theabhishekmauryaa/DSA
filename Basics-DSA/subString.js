// ==> How to Extract a Substring...
//  1. Using slice(start, end) Extracts part of a string from the start index to the end index (not included).
let str = "Hello World!";
console.log(str.slice(0,5)); // Hello

// 2.Using substring(start, end) Similar to slice but does not accept negative indices.
console.log(str.substring(0,5)); // Hello

// 3.Using substr(start, length) Extracts a substring of a specific length starting from the given index.
console.log(str.substr(0,5)); // Hello

// 1.Find All Substrings of a String

function findAllSubstrings(str) {

    for (let i = 0; i < str .length; i++) {
       let substrings = "";
       for(let j = i; j < str.length; j++){
        substrings += str[j]; // Add character to the substring
        console.log(substrings);
        
       }
 
    }
    
}
findAllSubstrings("abcd");

// 2. Check if a Substring Exists

function isSubstring(mainstr, substr) {
    let match = true;
    for(let i = 0; i < substr.length; i++){
        let match = true;
        for(let j = 0; j < substr.length; j++){
            if(mainstr[i+j] !== substr[j]){
                match = false;
                break;
            }
        }

        if(match) return true; // substring found
    }

    return false; // Not found
    
}

console.log(isSubstring("Helllo world", "world"));



