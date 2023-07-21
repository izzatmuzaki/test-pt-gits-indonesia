function isBalancedBracket(str) {
  const stack = [];
  const openBrackets = "({[";
  const closeBrackets = ")}]";

  for (let char of str) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      const openBracket = openBrackets[closeBrackets.indexOf(char)];
      if (stack.pop() !== openBracket) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

// Penggunaan fungsi
console.log(isBalancedBracket("{[()]}"));
console.log(isBalancedBracket("{[(])}"));
console.log(isBalancedBracket("{(()[[]])[]}"));
