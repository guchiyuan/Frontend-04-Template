const kmp = (source, pattern) => {
  if (pattern.length === 0) {
    return 0;
  }

  let table = new Array(pattern.length).fill(0);
  // 自重复匹配表
  {
    let i = 1;
    let j = 0;
    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        ++j, ++i;
        table[i] = j;        
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
    }
    console.log(table);
  }


  // 匹配
  {
    let i = 0;
    let j = 0;
    while (i < source.length) {
      if (source[i] === pattern[j]) {
        ++i, ++j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
      if (j === pattern.length) {
        return i - j;
      }
    }

    return -1;
  }
};

console.log(kmp("mississippi", "aabaaac"));
