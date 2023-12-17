function shortcut(s1, s2) {
  // your code here
	  let res = "";
  let trim = str.split(" ");
  res = trim[0][0]

  trim = str1.split(" ")
  res = res+trim[0][0]

// can not handle space....what is the logic for handeling space
	
  return res
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
