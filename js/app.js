function highAndLow(numbers) {
  const nums = numbers.split(' ').map(Number);
  const highest = Math.max(...nums);
  const lowest = Math.min(...nums);
  return `${highest} ${lowest}`;
}

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

function disemvowel(inputString) {
  const vowels = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;

}

function getCount(str) {
  const vowels = "aeiou";
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}