// 1) Sum Zero

function addToZero(arr) {
  let doesAddZero = false;
  let arrCopy = [...arr];

  for (i in arr) {
    arrCopy.splice(i, 1);
    arr.arrCopy.forEach((value) => {
      if (value + arr[i] === 0) {
        doesAddZero = true;
      }
    });
    arrCopy = [...arr];
  }
  return doesAddZero;
}
console.log(addToZero([]));
// False
console.log(addToZero([1]));
// False
console.log(addToZero([1, 2, 3]));
// False
console.log(addToZero([1, 2, 3, -2]));
// True

//2) Unique Characters

function hasUniqueChars(str) {
  const arrOfStr = Array.from(str);
  const set = new Set(arrOfStr);
  if (arrOfStr.length === set.size) {
    return true;
  } else {
    return false;
  }
}

console.log(hasUniqueChars("Monday"));
// True
console.log(hasUniqueChars("Moonday"));

// False

//3) Pangram Sentence

function isPangram(str) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const arrOfStr = Array.from(str);
  arrOfStr.forEach((letter) => {
    if (alphabet.includes(letter)) {
      const indexOfLetter = alphabet.findIndex((match) => match === letter);
      alphabet.splice(indexOfLetter, 1);
    }
  });
  if (alphabet.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// True
console.log(isPangram("I like cats, but no mice."));

// False

//4) Longest Word

function findLongestWord(arr) {
  let longestLength = 0;

  arr.forEach((word) => {
    const arrOfWord = Array.from(word);
    if (longestLength < arrOfWord.length) {
      longestLength = arrOfWord.length;
    }
  });
  return longestLength;
}
console.log(
  findLongestWord([
    "hi",
    "howdy",
    "Morning",
    "Supercalifragilisticexpialidocious",
  ])
);
console.log(findLongestWord(["hi", "howdy"]));
