function palindrome(str) {
  // Remove all non-alphanumeric characters (punctuation, spaces, and symbols) and turn everything into the same case (lowercase or uppercase) to check for palindromes.
  var cleanStr = str.replace(/[\W_]/g, '').toLowerCase();

  // Compare the cleaned string with its reverse.
  var reverseStr = cleanStr.split('').reverse().join('');
  
  // Check if the reversed string is strictly equal to the cleaned string.
  return cleanStr === reverseStr;
}

module.exports = palindrome;
