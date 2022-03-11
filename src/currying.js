// Run this using below command
// node .\src\currying.js

const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(add(10)(20)(12));
