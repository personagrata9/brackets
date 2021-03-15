module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let match;
  let brackets = bracketsConfig.toString().split(',');
  let brackets1 = brackets.filter((element, index)=> index % 2 === 0);
  let brackets2 = brackets.filter((element, index)=> index % 2 !== 0);

  for (let i = 0; i < str.length; i++) {
    if (brackets2.indexOf(str[i]) > -1) {
      match = brackets1[brackets2.indexOf(str[i])]
if (stack.length == 0 || (stack.pop() != match)) {
return false;
}
} else {
stack.push(str[i]);
}
}
return (stack.length == 0);
}
