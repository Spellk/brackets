module.exports = function check(str, bracketsConfig) {
  const bracketsMap = new Map();

  for (let config of bracketsConfig) {
    bracketsMap.set(config[1], config[0]);
  }

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (bracketsMap.has(char)) {
      const top = stack[stack.length - 1];

      if (top === bracketsMap.get(char)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      for (let config of bracketsConfig) {
        if (char === config[0]) {
          stack.push(char);
          break;
        }
      }
    }
  }

  return stack.length === 0;
};
