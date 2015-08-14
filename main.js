var numCases = [
  ['0'],
  ['1'],
  ['a','b','c','2'],
  ['d','e','f','3'],
  ['g','h','i','4'],
  ['j','k','l','5'],
  ['m','n','o','6'],
  ['p','q','r','s','7'],
  ['t','u','v','8'],
  ['w','x','y','z','9']
];

var perms = function(numString){
  var currentNumCases = numCases[parseInt(numString[0])];
  if (numString.length === 1){
    return currentNumCases;
  }
  var remainingCases = perms(numString.slice(1));
  return currentNumCases.reduce(function(resultArr, currentStr){
    return remainingCases.reduce(function(resultArr, remainingStr){
      return resultArr.concat([currentStr + remainingStr]);
    }, resultArr);
  }, []);
};

console.log(perms('867').toString());

////////////////////////////////////

var C = [
  ['0'],
  ['1'],
  ['a','b','c','2'],
  ['d','e','f','3'],
  ['g','h','i','4'],
  ['j','k','l','5'],
  ['m','n','o','6'],
  ['p','q','r','s','7'],
  ['t','u','v','8'],
  ['w','x','y','z','9']
];

var p=function(s){var c=C[parseInt(s[0])];if(s.length===1){return c}var r=p(s.slice(1));return c.reduce(function(a,u){return r.reduce(function(a,e){return a.concat([u+e])},a)},[])}

console.log(p('867').toString());

