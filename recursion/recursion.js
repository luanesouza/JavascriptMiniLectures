// Recursion is the process of breaking a problem in small problems. In a practical example is a function that calls itself as many times as needed to get the result we want (aka to resolve the problem in small steps)

const minusOne = (num) => {
  console.log(num);
  debugger
  if(num <= 0) {
    return 0;
  }
  num = num - minusOne(num - 1);
  return num;
}

minusOne(10)
