let createABC = () => {
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  let abcArray = abc.split('');
  return abcArray;
};

let checkLetter = (letter, arr) => {
   for(let i = 0; i <= arr.length - 1; i++) {
     if( letter === arr[i]) {
     arr.splice(i, 1);
     }
   }
};
// define the isPangram() function
let isPangram = (sentence) => {
  let abc = createABC();
  let str = sentence.toLowerCase().split(" ").join("").split("");
  for (let i = 0; i <= str.length; i++){
     checkLetter(str[i], abc);
    }
   if (abc.length === 0 ) {
     return true;
   } else {
     return false;
   }
};

// test the isPangram() function, and print results to the console.
let testData = [
  { sentence: 'The quick brown fox jumps over the lazy dog.', pangram: true },
  { sentence: 'The quick onyx goblin jumps over the lazy dwarf.', pangram: true },
  { sentence: 'Grumpy wizards make toxic brew for the evil queen and jack.', pangram: true },
  { sentence: 'Not a pangram', pangram: false },
  { sentence: '', pangram: false },
];

testData.forEach((trial) => {
  let result = isPangram(trial.sentence);
  let correct = (result == trial.pangram);
  if (correct === true) {
    console.log(`isPangram gave a correct result for: ${trial.sentence}`);
  } else {
    console.log(`isPangram gave an incorrect result for: ${trial.sentence}`);
  }
});
